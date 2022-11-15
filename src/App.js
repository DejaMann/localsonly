import AuthPage from "./pages/AuthPage";
import LandingNav from "./components/LandingNav";
import {LandingPage} from "./pages/LandingPage"
import SignInPage from "./pages/SignInPage"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//latest syntax replaces Switch with Routes
import {Search} from "./components/Search/Search"
import {LogOut} from "./components/LogOut"

const Rating = require ('react-rating')


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/search' element={<Search />} />
      {/* new syntax replace component with element  */}
      <Route path='/signin' element={<SignInPage />} />
      {/* Fix or get help */}
    </Routes>
  );
}

export default App;
