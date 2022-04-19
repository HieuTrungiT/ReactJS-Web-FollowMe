import * as React from 'react';
import { pat } from '../component/path'
import axios from 'axios';
import '../sass/css/RegisterPage.css'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { IconContext } from "react-icons";
// date Pike
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import DesktopDatePicker from '@mui/lab/DatePicker';

// Radio Mui

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
function RegisterPage() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data.firstname.length < 2) {
            alert("Họ phải lớn hơn 2 ký tự")
        } else if (data.firstname.length > 10) {
            alert("Họ phải bé hơn 10 ký tự")
        } else if (data.lastname.length < 2) {
            alert("Tên phải lớn hơn 2 ký tự")
        }
        else if (data.lastname.length > 10) {
            alert("Tên phải bé hơn 10 ký tự")
        }
        else if (data.Accout.length > 15) {
            alert("Tài khoản phải bé hơn 15 ký tự")
        }
        else if (data.Accout.length < 6) {
            alert("Tài khoản phải lớn hơn 6 ký tự")
        }
        else if (data.Password.length < 6) {
            alert("Mật khẩu phải lớn hơn 6 ký tự")
        }
        else if (data.Password.length > 15) {
            alert("Mật khẩu phải bé hơn 15 ký tự")
        } else if (value === null) {
            alert("Vui lòng chọn ngày sinh !!!")
        } else {
            axios.post("http://" + pat + "/singup", { data, sexx: sex, time: value }).then((response) => {
                console.log(response.data.success);
                if (response.data.success === true) {
                    navigate("/LoginPage")
                } else {
                    alert("Tài khoản đã có !!!")
                }
            });
        }

    };
    const sexChange = (event) => {
        setSex(event.target.value);
        console.log(sex);
    };
    // datepike
    const [value, setValue] = React.useState(null);
    const [sex, setSex] = React.useState("0");
    return (
        <div className="container-registerPage">
            <div className="contai-left-img">
                <img classNam="img-logo" src={require('../images/LogoApp.png')} />
            </div>
            < div className="contai-right-form">
                <div className="contai-form">
                    <div className="content-form">
                        <h1>Đăng kí</h1>
                    </div>
                    <div className="form-imput">
                        <div className="forms">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-name-user">
                                    <div className="form-first-name">
                                        <input className="form-input-first-name " id="first-name" type="text" placeholder=" " {...register("firstname", { required: true, maxLength: 80 })} />
                                        <label for="first-name" className="form-label-first-name ">Họ</label>
                                    </div>
                                    <div className="form-last-name">
                                        <input className="form-input-last-name " id="last-name" type="text" placeholder=" " {...register("lastname", { required: true, maxLength: 80 })} />
                                        <label for="last-name" className="form-label-last-name ">Tên</label>
                                    </div>
                                </div>
                                <div className="form-acout form-ctn">
                                    <input className="form-input-accout ipt" id="accout" type="text" placeholder=" " {...register("Accout", { required: true, maxLength: 80 })} />
                                    <label for="accout" className="form-label-accout lbl">Tài khoản</label>
                                </div>
                                <div className="form-password form-ctn">
                                    <input className="form-input-password ipt" id="password" type="password" placeholder=" " {...register("Password", { required: true, maxLength: 100 })} />
                                    <label for="password" className="form-label-password lbl">Mật khẩu</label>
                                </div>
                                <div className="contai-infor-user">
                                    <div className="form-datePicker">
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DesktopDatePicker
                                                label="Custom input"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={({ inputRef, inputProps, InputProps }) => (
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <input className="date-input-picker" ref={inputRef} {...inputProps} />
                                                        {InputProps?.endAdornment}
                                                        <label>Năm Sinh</label>
                                                    </Box>
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                    <div className="form-radio-sex">
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                value={sex}
                                                onChange={sexChange}
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group">
                                                <FormControlLabel value="0" labelPlacement="bottom" control={<Radio sx={{
                                                    color: '#ffff',
                                                    '&.Mui-checked': {
                                                        color: '#ffff',
                                                    }, '& .MuiSvgIcon-root': {
                                                        fontSize: 18,
                                                    },
                                                }} />} label="Nam" />
                                                <FormControlLabel value="1" labelPlacement="bottom" control={<Radio sx={{
                                                    color: '#ffff',
                                                    '&.Mui-checked': {
                                                        color: '#ffff',
                                                    }, '& .MuiSvgIcon-root': {
                                                        fontSize: 18,
                                                    },
                                                }} />} label="Nữ" />
                                                <FormControlLabel value="2" labelPlacement="bottom" control={<Radio sx={{
                                                    color: '#ffff',
                                                    '&.Mui-checked': {
                                                        color: '#ffff',
                                                    }, '& .MuiSvgIcon-root': {
                                                        fontSize: 18,
                                                    },

                                                }} />} label="Khác" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <button className="btn-register-default" type="submit"  >
                                    <p className="hover-text-login">Đăng kí</p>
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="icon-backs">
                    <Link to="/WecomePage">
                        <IconContext.Provider value={{ color: "white", className: "icon-back" }}>
                            <FiChevronLeft />
                        </IconContext.Provider>
                    </Link>

                </div>
                <footer>
                    <ul>
                        <li> <a href="#">Meta</a></li>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">Blog</a></li>
                        <li> <a href="#">Jobs</a></li>
                        <li> <a href="#">Help</a></li>
                        <li> <a href="#">API</a></li>
                    </ul>
                </footer>
            </div>

        </div>
    )
}
export default RegisterPage;