import React, { useEffect, useState } from 'react'
import './NavBar.scss'

import netflixLogo from '../../assets/netflix-logo.png'
import profilePic from '../../assets/Netlflix-mini01.jpg'
import searchIcons from '../../assets/netflix-search-icon.png'

import { ArrowDropDown, Notifications, Search, SearchRounded } from '@material-ui/icons'

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
    }
    return (
        <div className={`navbar ${isScrolled ? 'scrolled': ''}`}>
            <div className="navbar-container">
                <div className="navbar-container-left">
                    <img src={netflixLogo} alt="" />
                    <span className="active">Home</span>
                    <span>Watch again</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Trending</span>
                    <span>MyList</span>
                </div>

                <div className="navbar-container-right">
                    <SearchRounded className="navbar-container-right-icons"/>
                    <span>LIVE</span>
                    <Notifications  className="navbar-container-right-icons"/>
                    <div className="navbar-container-right-dropdown">
                        <img className="navbar-container-right-dropdown-image" src={profilePic} alt="profile" />
                        <ArrowDropDown className="navbar-container-right-dropdown-icons"/>
                        <div className="navbar-container-right-dropdown-options">
                            <span>Dad</span>
                            <span>Mom</span>
                            <span>Sister</span>
                            <span>Manage profiles</span>
                            <span>Account</span>
                            <span>Help</span>
                            <span>Log Out</span>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}
