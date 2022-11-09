import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import * as userService from "../utilities/user-service"
import './App.css';



const Navbar = () => {
    return (
       <div>
        <div>
          <span>Cities</span>
          <span>Write A Review</span>
        </div>
        <div>
          <span>Sign In</span>
          <button className='button'>Sign Up</button>
        </div>
       </div>
      );
    }
    

export default Navbar