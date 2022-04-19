import '../src/components/sass/css/App.css';
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from './components/pages/HomePage';
import WecomePage from './components/pages/WecomePage';

function App() {
  return (
    <div className="App">
      <WecomePage />
    </div>
  );
}

export default App;
