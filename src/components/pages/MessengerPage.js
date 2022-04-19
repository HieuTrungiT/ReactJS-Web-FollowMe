// import HomePage from './HomePage';
import Header from '../component/Header';
import NavMenu from '../component/NavMenu';
import '../sass/css/MessengerPage.css'
function MessengerPage() {
    return (
        <div className="container-app">
            <Header />
            <div className="container-content">
                <div className="content-navLeft"><NavMenu /></div>
                <div className="content-Right">
                    <div className='contai-list__friends__Chat'>
                        <ul>
                            <li>
                                <img src={require("../images/admin.jpg")} />
                                <div className='content-item-chat__friend'>
                                    <div className='content-chat-top'>
                                        <h3>#Trần Đức</h3>
                                        <p>12/10/2021</p>
                                    </div>
                                    <div className='content-chat-bottom'>
                                        <p>Xin chào!! / 12:41</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={require("../images/admin.jpg")} />
                                <div className='content-item-chat__friend'>
                                    <div className='content-chat-top'>
                                        <h3>#Trần Đức</h3>
                                        <p>12/10/2021</p>
                                    </div>
                                    <div className='content-chat-bottom'>
                                        <p>Xin chào!! / 12:41</p>
                                    </div>
                                </div>
                            </li> <li>
                                <img src={require("../images/admin.jpg")} />
                                <div className='content-item-chat__friend'>
                                    <div className='content-chat-top'>
                                        <h3>#Trần Đức</h3>
                                        <p>12/10/2021</p>
                                    </div>
                                    <div className='content-chat-bottom'>
                                        <p>Xin chào!! / 12:41</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={require("../images/admin.jpg")} />
                                <div className='content-item-chat__friend'>
                                    <div className='content-chat-top'>
                                        <h3>#Trần Đức</h3>
                                        <p>12/10/2021</p>
                                    </div>
                                    <div className='content-chat-bottom'>
                                        <p>Xin chào!! / 12:41</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={require("../images/admin.jpg")} />
                                <div className='content-item-chat__friend'>
                                    <div className='content-chat-top'>
                                        <h3>#Trần Đức</h3>
                                        <p>12/10/2021</p>
                                    </div>
                                    <div className='content-chat-bottom'>
                                        <p>Xin chào!! / 12:41</p>
                                    </div>
                                </div>
                            </li> <li>
                                <img src={require("../images/admin.jpg")} />
                                <div className='content-item-chat__friend'>
                                    <div className='content-chat-top'>
                                        <h3>#Trần Đức</h3>
                                        <p>12/10/2021</p>
                                    </div>
                                    <div className='content-chat-bottom'>
                                        <p>Xin chào!! / 12:41</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="contai-Chat__friend">
                        <div className='contai-chatBar-top'>
                            <img src={require("../images/admin.jpg")} />
                            <h3>#Hiếu Trung</h3>
                            <button className="btn-options-chat">
                                <svg width="5" height="21" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.09998" cy="2.09998" r="2.09998" fill="#424242" />
                                    <circle cx="2.09998" cy="10.4998" r="2.09998" fill="#424242" />
                                    <circle cx="2.09998" cy="18.8998" r="2.09998" fill="#424242" />
                                </svg>
                            </button>
                        </div>
                        <div className='list-chat__user'>
                            <div className='list-chat'>
                                list chat
                            </div>
                        </div>
                        <div className='active__chat-btn'>
                            <input placeholder='Nhập văn bản...' type="text" id="fname" name="fname" />
                            <button className='btn_chat'>
                                <img src={require("../images/icons/telegram-logo.png")} />

                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}
export default MessengerPage;