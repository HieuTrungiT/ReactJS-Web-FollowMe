
import '../sass/css/Header.css'

function Header() {
    return (
        <header >
            <div className="imge-logo">
                <img src={require('../images/LogoApp.png')}/>
            </div>
            <h3>Hi Trung</h3>
        </header>
    )
}
export default Header;