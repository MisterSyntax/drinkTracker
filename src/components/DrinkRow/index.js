import React from "react";
import PropTypes from "prop-types"



export const DrinkRow = ({name, price, size, bar}) => {
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
