import {useState}  from "react";
import {Routes, Route} from 'react-router-dom';
import {getUser} from "./utilities/user-service";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import {LandingPage} from "./pages/LandingPage"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
