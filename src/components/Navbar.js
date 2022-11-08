import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import * as userService from "../utilities/user-service"

const Navbar = ({user, setUser}) => {
    const handleLogOut = () => {
        // Delegate to the users-service
        userService.logOut();
    // Update state will also cause a re-render
        setUser(null)
    }
    return (
        <div>
            <div>
                <span>Rate a Truck</span>
                <span>Cities</span>
            </div>
            <div>
                <span>Sign Up/Login</span>
                <button className='button'>Sign Up</button> />
                {/* <Link to="" onClick={handleLogOut}>Log Out</Link> {' '} | {' '} Welcome, {user.name}! */}
            </div>
        </div>
    )
}

export default Navbar