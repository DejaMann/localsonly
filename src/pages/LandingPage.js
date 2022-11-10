import React from 'react'
import Navi from "../components/Navi"
import logo from "../images/logo.png"
import { SearchBar } from '../components/SearchBar/SearchBar'


export function LandingPage() {
    return (
        <div>
            <Navi />
            <img src={logo} alt='logo'/>
            <SearchBar />
            
        </div>
    )
}