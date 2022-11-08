import {useState}  from "react";
import {Routes, Route} from 'react-router-dom';
import {getUser} from "./utilities/user-service";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import {LandingPage} from "./pages/landingpage/LandingPage"
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());
  console.log(user)
  return (
    <main className="App">
      { user ? (
        <>
          <Navbar user={user} setUser={setUser}/>
        </>
      ) : (
      <LandingPage setUser={setUser}/>
      )}
    </main> 
  );
}

export default App;
