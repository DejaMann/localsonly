import React from 'react'
import logo from "../images/logo.png"
import { SearchBar } from '../components/SearchBar/SearchBar'
import LandingNav from '../components/LandingNav'
// import useReactRouter from 'use-react-router';



export function LandingPage() {
    // const {history} = useReactRouter();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        // history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`)
      } // string query parameters are done the same way Yelp does
      // encoding URL so there are no issues with spaces in search text
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

