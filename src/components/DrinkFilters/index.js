import { Link } from 'react-router-dom'
import React from 'react'

export const DrinkFilters = () => {
    return (
        <div id="drinkFilters">
            <Link to="/drink-list">All Drinks</Link>
            <Link to="/drink-list/size=16">Pints</Link>
            <Link to="/drink-list/size=64">Pitchers</Link>
        </div>
    )
}
