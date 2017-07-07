import { Link } from 'react-router-dom'
import React from 'react'

const DrinkFilters = () => {
    return (
        <div id="drinkFilters">
            
            <div><Link className="action-item" to="/drink-list">All Drinks</Link></div>
            <div><Link className="action-item" to="/drink-list/size=16">Pints</Link></div>
            <div><Link className="action-item" to="/drink-list/size=64">Pitchers</Link></div>
            
        </div>
    )
}

export default DrinkFilters;