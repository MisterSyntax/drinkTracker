import React from 'react'
import PropTypes from 'prop-types'

import InfoOverlay from '../InfoOverlay'


/**
 * @description: This components generates the info from a selected drink
 */
const DrinkInfo = ({drink, children}) => {
    console.log(children)
    return (
        <InfoOverlay className='drinkInfo' title={children}>
            <div>Bar: {drink.bar}</div>
            <div className="address">Address: {drink.address}</div>
            <div></div>
        </InfoOverlay>
    )
}

export default DrinkInfo

DrinkInfo.propTypes = {
    drink: PropTypes.object
}
