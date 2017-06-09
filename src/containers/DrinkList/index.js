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
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Bar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.drinks.map((drink, i) => {  return (<DrinkRow key={i} {...drink} />) })
                        }
                    </tbody>
                </table>
            </div>
        )

    }
};

DrinkList.defaultProps = {

        drinks: [{
            "name": "Need a Drink",
            "bar": "Need a Bar",
            "geo": "TODO-1",
            "price": 2,
            "size": 16,
            "totalDrinks": 1,
            "lastDrank": "2017-05-30",
            "drinkId": 0,
            "flags": {
                "badPrice": 0,
                "unavailable": 0
            }
        }]

};

DrinkList.propTypes = {
    drinks: PropTypes.array
};