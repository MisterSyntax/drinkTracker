import React from "react";
import PropTypes from "prop-types"



export const DrinkRow = ({name="Some Drink", price=10, size=100, bar="Some Bar"}) => {

    return (
        <tr className="drink">
            <td>{name}</td>
            <td>{price}</td>
            <td>{size}</td>
            <td>{bar}</td>
        </tr>);
        
}

DrinkRow.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    bar: PropTypes.string.isRequired
}
