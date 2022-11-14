import React from 'react'
import logo from "../images/logo.png"
import { SearchBar } from '../components/SearchBar/SearchBar'
import LandingNav from '../components/LandingNav'



export function LandingPage() {
    return (
        <div>
            <div>
                <LandingNav />
                <img src={logo}  alt='logo'/>
                <SearchBar /> 
            </div>
        </div>
    )
}

