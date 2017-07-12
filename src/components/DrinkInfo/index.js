import React from 'react'
import PropTypes from 'prop-types'

import InfoOverlay from '../InfoOverlay/'
import Map from '../Map/'
import './drinkInfo.css'


/**
 * @description: This components generates the info from a selected drink
 */
const DrinkInfo = ({drink, children}) => {
    const drinkDirectionsUrl = "https://www.google.com/maps/dir/Current+Location/"+ drink.bar + "+"+drink.address.replace(/\s+/g,"+")
    return (
        <div className='drinkInfo'>
            <InfoOverlay title={children}>
                <div>${drink.price}: {drink.size}oz {drink.name} </div>
                <div>{drink.bar}</div>
                <div className="address">Address: {drink.address}</div>
                <div className="directions">
                    <a className="button" target="_blank" href={drinkDirectionsUrl}>
                    Get Directions</a>
                </div>
            </InfoOverlay>
        </div>
    )
}

export default DrinkInfo

DrinkInfo.propTypes = {
    drink: PropTypes.object
}
