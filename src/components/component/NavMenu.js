import '../sass/css/NavMenu.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function NavMenu() {
 
    return (
        <div className="navLeft">
            <div className="menu">
                <ul>
                    <li href="">
                        <div className="item-nav">
                            <img src={require('../images/icons/home.png')} />
                        </div>
                        <Link to="/HomePage"><p>TRANG CHỦ</p></Link>
                    </li>
                    <li>
                        <div className="item-nav">
                            <img src={require('../images/icons/icons8-space-exploration-99.png')} />
                        </div>
                        <Link to="/Discover"><p>KHÁM PHÁ</p></Link>
                    </li>
                    <li>
                        <div className="item-nav">
                            <img src={require('../images/icons/icons8-location-64.png')} />
                        </div>
                        <Link to="/NewLocation"><p>ĐỊA ĐIỂM MỚI</p></Link>
                    </li>
                    <li>
                        <div className="item-nav">
                            <img src={require('../images/icons/icons8-users-64.png')} />
                        </div>
                        <Link to="/Followers"><p>THEO DÕI</p></Link>
                    </li>
                    <li>
                        <div className="item-nav">
                            <img src={require('../images/icons/icons8-night-landscape-96.png')} />
                        </div>
                        <Link to="/TopView"><p>TOP VIEW</p></Link>
                    </li>
                    <li >
                        <div className="item-nav">
                            <img src={require('../images/icons/messenger.png')} />
                        </div>
                        <Link to="/Messenger">

                        <p>TIN NHẮN</p>
                        </Link>
                    </li>

                </ul>
            </div>


        </div>
    )
}
export default NavMenu;