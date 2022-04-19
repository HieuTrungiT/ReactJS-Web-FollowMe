
import '../sass/css/WecomePage.css';
import { Link } from "react-router-dom";
function WecomePage() {
    return (
        <div className="container-wecomePage">
            <div className="contai-left-img">
                <img classNam="img-logo" src={require('../images/LogoApp.png')} />
            </div>
            < div className="contai-right-form">
                <div className="contai-form">
                    <div className="content-form">
                        <h2>KHÁM PHÁ THẾ GIỚI <br />
                            QUA KHUNG ẢNH</h2>
                        <p>Gia nhập với “Folow Me” ngay.</p>
                    </div>
                    <div className="form-imput">
                        <button className="btn-login-default">
                        <Link to="/LoginPage"><p>Đăng nhập</p></Link>
                        </button>
                        <div className="text-line">
                            <div className="line" />
                            <div className="text">OR</div>  
                                  <div className="line" />

                        </div>
                        <button className="btn-login-google">
                            <img src={require('../images/icons/ic-google.png')} />
                            <span>Google</span>
                        </button>

                        <button className="btn-register">
                        <Link to="/RegisterPage"><p>Đăng kí</p></Link>
                        </button>
                    </div>
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
export default WecomePage;