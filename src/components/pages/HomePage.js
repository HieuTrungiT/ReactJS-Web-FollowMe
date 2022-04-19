import '../sass/css/HomePage.css'
// import App from '../App'
// Pages
// import HomePage from './HomePage';
import Header from '../component/Header';
import NavMenu from '../component/NavMenu';
import DiscoverPage from './DiscoverPage';
import WecomePage from './WecomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import FollowersPage from './FollowersPage';
import HomeManagerPage from './HomeManagerPage';
import HomePostPage from './HomePostPage';
import NewLocationPage from './NewLocationPage';
import TopViewPage from './TopViewPage';
import { Routes, Route } from "react-router-dom";



function HomePage() {
    return (
        <div className="container-app">
            <Header />
            <div className="container-content">
                <div className="content-navLeft">
                    <NavMenu />
                </div>
                <div className="content-Right">
                    <Routes>
                        <Route path="/" element={<HomePostPage />} />
                    </Routes>
                </div>
            </div>

        </div >
    )
}
export default HomePage;