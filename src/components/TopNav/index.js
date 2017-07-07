import React from 'react'
import Nav from '../Nav/'
import './topnav.css'
import User from 'react-icons/lib/ti/user'

const TopNav = () => {
    return(
        <div id='top-nav-container'>
            <div id="top-nav-items">
                <div className="top-nav-item action-item"><Nav /></div>
                <div className="top-nav-item">Let's Find a Drink</div>
                <div className="top-nav-item action-item"><User /></div>
            </div>
        </div>
    )
}

export default TopNav