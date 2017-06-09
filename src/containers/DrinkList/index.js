import React from "react";
import "./allDrinks.css";
import PropTypes from "prop-types";
import { DrinkRow } from "../../components/DrinkRow/"

export default class DrinkList extends React.Component {
    render() {
        return (
            <div className="drink-list">
                <table className="total-drinks">
                    <thead>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Bar</th>
                    </thead>
                    <tbody>
                    </tbody>
                    {
                        this.props.drinks.map((drink,i) => {console.log(drink);return(<DrinkRow key={i} {...drink} />)})
                    }
                </table>
            </div>
        )

    }
};

DrinkList.propTypes = {
    drinks: PropTypes.array.isRequired
}