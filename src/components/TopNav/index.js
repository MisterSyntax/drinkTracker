import React from 'react'
import Nav from '../Nav/'
import './topnav.css'

const TopNav = () => {
    return(
        <div id='top-nav-container'>
            <div id="top-nav-items">
                <div className="top-nav-item"><Nav /></div>
                <div className="top-nav-item">Let's Find a Drink</div>
                <div className="top-nav-item">Sign in</div>
            </div>
        </div>
    )
}

export default TopNav