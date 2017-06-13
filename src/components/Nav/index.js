import {
    Link
} from 'react-router-dom'
import React from 'react'

export const Nav = () => {
    return (
        <div id="Nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-drink">Add Drink</Link></li>
                <li><Link to="/drink-list">Drink List</Link></li>
            </ul>
        </div>
    )
}