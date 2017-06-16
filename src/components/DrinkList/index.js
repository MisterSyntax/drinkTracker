import React from 'react';
import './allDrinks.css';
import PropTypes from 'prop-types';
import { DrinkRow } from '../DrinkRow/'
import { DrinkListCount } from '../DrinkListCount/'
import { DrinkFilters } from '../DrinkFilters'


export const DrinkList = ({drinks, filter, onRemoveDrink}) => {
    const filteredDrinks =
        (!filter || !filter.match(/^(?:16|64)$/)) ?
            drinks
            : drinks.filter((drink) => drink.size == parseInt(filter))

    return (
        <div className="drink-list">
            <DrinkFilters />
            <DrinkListCount numDrinks={filteredDrinks.length}/>
            <table className="total-drinks pure-table pure-table-horizontal">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Bar</th>
                        <th>Remove</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        filteredDrinks.map((drink, i) => {

                            return (<DrinkRow key={i} {...drink} onRemoveDrink={onRemoveDrink}/>)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
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
    drinks: PropTypes.array,
    filter: PropTypes.string
};