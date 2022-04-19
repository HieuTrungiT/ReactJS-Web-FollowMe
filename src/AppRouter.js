import '../src/components/sass/css/App.css';
import { Routes, Route } from "react-router-dom";

// Pages
import App from "./App"
import HomePage from './components/pages/HomePage';
import DiscoverPage from './components/pages/DiscoverPage';
import WecomePage from './components/pages/WecomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import FollowersPage from './components/pages/FollowersPage';
import HomeManagerPage from './components/pages/HomeManagerPage';
import HomePostPage from './components/pages/HomePostPage';
import NewLocationPage from './components/pages/NewLocationPage';
import TopViewPage from './components/pages/TopViewPage';
import MessengerPage from './components/pages/MessengerPage';

function AppRouter() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/WecomePage" element={<WecomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/HomePost" element={<HomePostPage />} />
        <Route path="/HomeManager" element={<HomeManagerPage />} />
        <Route path="/Discover" element={<DiscoverPage />} />
        <Route path="/NewLocation" element={<NewLocationPage />} />
        <Route path="/Followers" element={<FollowersPage />} />
        <Route path="/TopView" element={<TopViewPage />} />
        <Route path="/Messenger" element={<MessengerPage />} />

      </Routes> 
    </div>
  );
}

export default AppRouter;
