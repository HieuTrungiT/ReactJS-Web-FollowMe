import { Routes, Route, Link, useNavigate } from "react-router-dom";
import '../sass/css/HomePostPage.css'
import { pat } from '../component/path'
import React, { Fragment, useState, useEffect } from 'react';
import Select from 'react-select';
import { useForm } from "react-hook-form";
const axios = require('axios').default;

const options = [
    { value: 'coffe', label: 'coffe' },
    { value: 'Tea', label: 'Tea' },
    { value: 'Nhà hàng', label: 'Nhà hàng' },
    { value: 'Đô thị', label: 'Đô thị' },
    { value: 'Cảnh vật', label: 'Cảnh vật' },
];


function HomePostPage() {
    const [titleNew, setNewTitle] = useState('');
    const [contentNew, setNewContent] = useState('');
    const [locationNew, setNewLocation] = useState('');
    const [keySearchNew, setNewKeySearch] = useState(null);
    const [dataPost, setDataPost] = useState([]);
    const [fileNew, setNewFile] = useState([]);
    const [arrFolderImg, setArrFolderImg] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [checkSizeImg, setCheckSizeImg] = useState(0);
    const [isModal, setIsModal] = useState(true);

    //Khai báo edit
    const [titleEdit, setTitleEdit] = useState('');
    const [contentEdit, setContentEdit] = useState('');
    const [locationEdit, setLocationEdit] = useState('');
    const [keySearchEdit, setKeySearchEdit] = useState('');

    const testData = () => {
        console.log('==================TesData==================');
        console.log(locationEdit);
        console.log('====================================');
    }
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate("/LoginPage")
    }
    const openModelUpdate = (item) => {

        setTitleEdit(item.title)
        setContentEdit(item.content)
        setLocationEdit(item.location)
        setKeySearchEdit(item.keyearch)
        document.getElementById("container-modal").style.display = "block";
        console.log(locationEdit);
    }
    const offModelUpdate = () => {
        setTitleEdit('')
        setContentEdit('')
        // setLocationEdit('')
        setKeySearchEdit('')
        document.getElementById("container-modal").style.display = "none";

    }
    const setDefaultValue = () => {
        setNewTitle('')
        setNewContent('')
        setNewLocation('')
        setNewKeySearch(null)
        setNewFile(null)
    }

    // =========================Sử lý bài đăng ====================//
    // thêm bài đăng
    const onSubmit = () => {
        console.log('====================================');
        console.log(titleNew);
        console.log(contentNew);
        console.log(locationNew);
        console.log(keySearchNew);
        console.log('====================================');

        if (checkSizeImg >= 1) {
            alert("Chỉ cho phép tải tệp tin nhỏ hơn 1MB");
        } else {
            console.log(locationNew);
            axios.post('http://' + pat + '/addPostNew/', { titleNewPost: titleNew, contentNewPost: contentNew, locationNewPost: locationNew, keySearchNewPost: keySearchNew.value })
                .then(response => {
                    if (response.data.idImgFolder !== "") {
                        const idImgFolder = response.data.idImgFolder;
                        //  khi thêm bài đăng thì lấy idImgFolde
                        pustImgSQL(idImgFolder);
                    }
                });
        }
    }

    // xóa bài đăng
    const deletePost = (item) => {
        let text = "Bạn có muốn xóa bài viết này!\nĐồng ý hoặc Không.";
        if (window.confirm(text) == true) {

            axios.post('http://' + pat + '/deletePost/', item)
                .then(response => {
                    if (response.data === 'ok') {
                        alert('xóa thành công')
                        getDataPost();
                    }
                });
            getDataPost();
        } else {

        }



    }

    // =========================Sử lý Hình ảnh ====================//

    //  thêm ảnh vào danh sách chờ
    const updateFile_temporary = (event) => {
        setArrFolderImg([])
        setCheckSizeImg(0)
        for (let i = 0; i < event.target.files.length; i++) {
            const size = event.target.files[i].size;
            console.log(size)
            if (size > 1024 * 1024) {
                setCheckSizeImg(1)
            }
            setArrFolderImg(arrFolderImg => [...arrFolderImg, event.target.files[i]]);

        }
    }

    //  thêm ảnh lên SQL
    const pustImgSQL = (idImgFolder) => {
        arrFolderImg.map((item) => {
            const formdata = new FormData();
            // item.idImgFolders = idImgFolder;
            formdata.append('profileImg', item)
            formdata.append('idImgFolders', idImgFolder)
            axios.post('http://' + pat + '/uploadImage', formdata)
                .then(response => {
                    if (response.statusText == 'OK') {
                        getDataPost();
                        // sau khi đăng bài và tải ảnh xong thì xóa dữ liệu input
                        setDefaultValue();
                    }

                });
        });
    };



    // ==================Get Data kèm folder hình ản ====================//

    // lấy dataPost về
    const getDataPost = async () => {
        const baseUrl = 'http://' + pat + '/post/';
        const response = await axios.get(baseUrl);
        setDataPost(response.data)
    }
    useEffect(() => {
        getDataPost();
    }, []);

    return (

        <div className="container">
            <div id="container-modal" className="contai-modal__update-post">
                <div className="modal-update-post">
                    <div className="modal">
                        <div className="text__btn">
                            <h3>Sửa bài viết</h3>
                            <button onClick={() => offModelUpdate()} type="button" className="btn-UnModal">
                                <img src={require("../images/icons/ic_delete.png")} />
                            </button>
                        </div>
                        <div className="top-desiger-post">
                            <div className="top-left-desiger-post">
                                <div className="avatar-dsg-post">
                                    <img className="img-avatar" src={require('../images/admin.jpg')} />
                                </div>
                                <div className="infor__status-update">
                                    <h3>Vũ Hiếu Trung</h3>
                                    <div className="status">
                                        <div className="erth">
                                            <img src={require("../images/icons/earth.png")} />
                                        </div>
                                        <p>Công khai</p>
                                    </div>
                                </div>
                            </div>
                            <div className="top-right-desiger-post">

                                <input defaultValue={locationEdit} type="text" className="location-input-desiger-post" placeholder="Địa điểm..." onChange={(e) => setLocationEdit(e.target.value)} />
                                <Select
                                    className="select__location-desiger-post"
                                    defaultValue={keySearchEdit}
                                    onChange={setKeySearchEdit}
                                    options={options}
                                    value={keySearchEdit}
                                />
                            </div>
                        </div>
                        <div className="contai-content-post">
                            <div>
                                <input value={titleEdit} type="text" className="title-input-update-post" placeholder="Tiêu đề...." onChange={(e) => setNewTitle(e.target.value)} />
                                <textarea value={contentEdit} onChange={(e) => setNewContent(e.target.value)} placeholder="Nội dung..." name="tên trường" className="content-input-update-post" cols="số cột (bề dài)" rows="10">
                                </textarea>
                                <div className="edit__img-list">
                                    <img src={require('../images/imgTest.jpg')} />
                                </div>
                            </div>
                        </div>
                        <div className="btn__updatePost">
                            <button type="button" className="btn-update">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-contentPost">
                <button type="button" onClick={() => testData()}>test Data</button>
                <div className="desiger__container-post">
                    <div className="content-desiger-post">
                        <div className="top-desiger-post">
                            <div className="top-left-desiger-post">
                                <div className="avatar-dsg-post">
                                    <img className="img-avatar" src={require('../images/admin.jpg')} />
                                </div>
                                <input value={titleNew} type="text" className="title-input-desiger-post" placeholder="Tiêu đề...." onChange={(e) => setNewTitle(e.target.value)} />
                            </div>
                            <div className="top-right-desiger-post">

                                <input value={locationNew} type="text" className="location-input-desiger-post" placeholder="Địa điểm..." onChange={(e) => setNewLocation(e.target.value)} />
                                <Select
                                    className="select__location-desiger-post"
                                    defaultValue={keySearchNew}
                                    onChange={setNewKeySearch}
                                    options={options}
                                    value={keySearchNew}
                                />
                            </div>
                        </div>
                        <div className="bottom-desiger-post">
                            <textarea value={contentNew} onChange={(e) => setNewContent(e.target.value)} placeholder="Nội dung..." name="tên trường" className="content-input-desiger-post" cols="số cột (bề dài)" rows="10">
                            </textarea>
                        </div>
                    </div>
                    <div className="btn-desiger-post">
                        <input type='file' name='files[]' accept=".jpg, .png" className="btn-fileImg-desiger-post" onChange={updateFile_temporary} multiple />
                        <button type="button" onClick={() => onSubmit()} className="btn-post-desiger-post">Post</button>
                    </div>
                </div>
                <div className="list-post-container">
                    {dataPost && dataPost.length && dataPost.map((item) => {
                        return (
                            <div key={item.idPost} className="item-post">
                                {/* ảnh bài viết */}
                                <div className="item-contai-img_post">
                                    <div className="list-img">
                                        <div className="img__fullScreenItem">
                                            <div className="item-img">
                                                <img src={"http://" + pat + "/uploads/" + item.listImgFolder[0].nameImg + ""} />
                                            </div>
                                        </div>
                                        {/* nếu có nhiều hơn 1 ảnh thì show tại đây */}
                                        <div className="list-img-row">
                                            {item && item.listImgFolder && item.listImgFolder.map((k, index) => {
                                                if (index >= 1) {
                                                    return (
                                                        <div className="item-img">
                                                            <img src={"http://" + pat + "/uploads/" + k.nameImg + ""} />
                                                        </div>
                                                    )
                                                }
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* thông tin bài viết */}
                                <div className="item-contai-content_post">
                                    <div className="contentPost__top">
                                        <div className="infor__user-item-post">
                                            <div className="avatar-post">
                                                <img src={require("../images/admin.jpg")} />
                                            </div>
                                            <div className="infor__user-post">
                                                <div className="active__status-post">
                                                    <div className="erth">
                                                        <img src={require("../images/icons/earth.png")} />
                                                    </div>
                                                    <p>Công khai</p>
                                                </div>
                                                <div className="infor-post">
                                                    <a href="#">Vũ Hiếu Trung</a>
                                                </div>
                                            </div>
                                            <div className="contai-btn-setting__post">
                                                <button className="btn-setting__post">
                                                    <svg width="5" height="21" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="2.09998" cy="2.09998" r="2.09998" fill="#424242" />
                                                        <circle cx="2.09998" cy="10.4998" r="2.09998" fill="#424242" />
                                                        <circle cx="2.09998" cy="18.8998" r="2.09998" fill="#424242" />
                                                    </svg>

                                                </button>
                                            </div>
                                            <div id="modal__settting-post" class="modal-setting__post">
                                                <ul>
                                                    <li>
                                                        <button type="button" class="btn-setting__save__post">
                                                            Lưu bài viết
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={() => openModelUpdate(item)} type="button" class="btn-setting__update__post">
                                                            Sửa bài viết
                                                        </button>  </li>
                                                    <li>
                                                        <button type="button" class="btn-setting__update__status">
                                                            Sửa đối tượng
                                                        </button>
                                                    </li>
                                                    <li onClick={() => deletePost(item)}> <button type="button" class="btn-setting__deletePost">
                                                        Xóa bài viết
                                                    </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="title__post-item">
                                            <h2>{item.title}</h2>
                                            <h3>{item.location}</h3>
                                            <h4>{item.dateTime}</h4>
                                        </div>
                                        <div className="content__post-item">
                                            <p>{item.content}</p>
                                        </div>
                                    </div>

                                    <div className="contentPost__bottom">
                                        <div className="buttom__post-item">
                                            <div className="btn">
                                                <button type="button" className="btn-like ">
                                                    <img src={require("../images/icons/icons8-like-64.png")} />
                                                </button>
                                            </div>
                                            <div className="btn">
                                                <button type="button" className="btn-commet btnbtn ">
                                                    <img src={require("../images/icons/icons8-comments-96.png")} />
                                                </button>
                                            </div>
                                            <div className="btn">

                                                <button type="button" className="btn-like ">
                                                    <img src={require("../images/icons/icons8-share-96.png")} />
                                                </button>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>

                        )
                    })}

                    {/* =========================== */}

                </div>
            </div>
            <div className="content-navRight">
                <div className="navRight">
                    <div className="search-post">

                        <input className="input-form-Search input-form-Searchfc" type="text" id="fname" name="fname" placeholder=" " />
                        <label for="fname" className="label-form-Search">Tìm kiếm</label>
                        <span className="icon-search">
                            <img className="img-icon-search" src={require('../images/icons/search.png')} alt="Search" />
                        </span>
                    </div>
                    <h3>Địa điểm</h3>
                    <ul className="box-list-keySearch">
                        {/* item1 */}
                        <li className="item-box-keySearch">

                            <img src={require('../images/icons/coffee.png')} className="item-box-keySearch-img-icon" />

                        </li>
                        {/* item2 */}
                        <li className="item-box-keySearch">
                            <img src={require('../images/icons/bubble-tea.png')} className="item-box-keySearch-img-icon" />
                        </li>
                        {/* item3 */}
                        <li className="item-box-keySearch">
                            <img src={require('../images/icons/restaurant.png')} className="item-box-keySearch-img-icon" />
                        </li>
                        {/* item4 */}
                        <li className="item-box-keySearch">
                            <img src={require('../images/icons/building.png')} className="item-box-keySearch-img-icon" />
                        </li>
                        {/* item5 */}
                        <li className="item-box-keySearch">
                            <img src={require('../images/icons/mountains.png')} className="item-box-keySearch-img-icon" />
                        </li>
                        {/* item6 */}
                        <li className="item-box-keySearch">
                            <img src={require('../images/icons/building.png')} className="item-box-keySearch-img-icon" />
                        </li>
                        {/* item6 */}
                        <li className="item-box-keySearch">
                            <img src={require('../images/icons/coffee.png')} className="item-box-keySearch-img-icon" />
                        </li>
                        {/* item6 */}
                        <li className="item-box-keySearch">
                            <img src={require('../images/icons/home.png')} className="item-box-keySearch-img-icon" />
                        </li>
                    </ul>
                    {/* <h3>Cá nhân</h3> */}
                    <div className='card-item__inforUser'>
                        <div className='infor-user'>
                            <img src={require('../images/admin.jpg')} />
                            <h3>#Hiếu Trung</h3>
                        </div>
                        <button className="btn-options-user">
                            <svg width="5" height="21" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.09998" cy="2.09998" r="2.09998" fill="#424242" />
                                <circle cx="2.09998" cy="10.4998" r="2.09998" fill="#424242" />
                                <circle cx="2.09998" cy="18.8998" r="2.09998" fill="#424242" />
                            </svg>

                        </button>
                        <div id='modal-card-user' className="modal-content">
                            <ul>
                                <li onClick={logout}>
                                    <p>Đăng Xuất</p>
                                    <img src={require('../images/icons/icons8-logout-96.png')} />

                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3>Theo dõi</h3>
                    <ul className="box-list-followers">
                        <li className="item-box-followers">
                            <span>#Name User1</span>
                        </li>
                        <li className="item-box-followers">
                            <span>#Name User1</span>
                        </li>
                        <li className="item-box-followers">
                            <span>#Name User1</span>
                        </li>
                        <li className="item-box-followers" onClick={() => alert("Hihi")}>
                            <span>#Name User1</span>
                        </li>

                        <p className="button-box-followers">Xem thêm</p>
                    </ul>
                </div>
            </div>

        </div>

    )
}
export default HomePostPage;