import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navi";
import {LandingPage} from "./pages/LandingPage"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//latest syntax replaces Switch with Routes
import {SearchResults} from "./components/SearchResults"
import {LogOut} from "./components/LogOut"


function App() {
  return (
    <Routes>
      <Route path='/search' element={<SearchResults />} />
      {/* new syntax replace component with element  */}
      <Route path='/' element={<LandingPage />} />
      {/* will need route for AuthPage */}
    </Routes>
  );
}

export default App;
