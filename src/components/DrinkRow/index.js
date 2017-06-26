import React from "react";
import PropTypes from "prop-types"
import "./drink.css"
import OverlayBox from "../OverlayBox/"



export const DrinkRow = ({name = "Some Drink", price = 10, size = 100, bar = "Some Bar", drinkId, onRemoveDrink}) => {

    return (
        <div className="drink">

            <div className="price">${price}</div>
            <span>For a {size}oz {name} at {bar}</span>
            <OverlayBox confirmFunction={onRemoveDrink} 
                drinkId={drinkId} 
                content="X" 
                boxQuestion="Are you sure you want to delete the drink?">
            </OverlayBox>
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
