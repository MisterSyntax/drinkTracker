import React from 'react';
import PropTypes from 'prop-types'
import './drink.css'

import ConfirmOverlayBox from '../ConfirmOverlayBox/'
import DrinkInfo from '../DrinkInfo'



export const DrinkRow = (props) => {

    return (
        <div className='drink'>

             <DrinkInfo drink={props}>
                <div className='price'>${props.price}</div>
            </DrinkInfo>

            <DrinkInfo drink={props}>                
                <span>For a {props.size}oz {props.name} at {props.bar}</span>
            </DrinkInfo>

            <ConfirmOverlayBox confirmFunction={props.onRemoveDrink}
                drinkId={props.drinkId} 
                content='X' 
                boxQuestion='Are you sure you want to delete the drink?'>
            </ConfirmOverlayBox>
            
        </div>);

}

DrinkRow.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    bar: PropTypes.string.isRequired,
    drinkId: PropTypes.number.isRequired,
    onRemoveDrink: PropTypes.func.isRequired
}


DrinkRow.defaultProps = {
    name: "Some Drink",
    price: 2.5,
    size: 16,
    bar: "Some Bar",
    drinkId: 123,
    onRemoveDrink: f=>f
}