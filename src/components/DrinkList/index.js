import React from 'react';
import './allDrinks.css';
import PropTypes from 'prop-types';
import { DrinkRow } from '../DrinkRow/'
import DrinkFilters from '../DrinkFilters'
import { DrinkListCount } from '../DrinkListCount/'
import FlyoutPanel from '../FlyoutPanel'

import FilterIcon from 'react-icons/lib/fa/filter'


export const DrinkList = ({drinks, filter, onRemoveDrink}) => {
    const filteredDrinks =
        (!filter || !filter.match(/^(?:16|64)$/)) ?
            drinks
            : drinks.filter((drink) => drink.size == parseInt(filter))

    return (
        <div className="drink-list">
            <div className="horizontal-items filter-container">
                <FlyoutPanel flyoutButton="Filters">
                    <DrinkFilters />
                </FlyoutPanel>
                <DrinkListCount numDrinks={filteredDrinks.length} />
            </div>
            

            <div className="all-drinks">
                {
                    filteredDrinks.map((drink, i) => {

                        return (<DrinkRow key={i} {...drink} onRemoveDrink={onRemoveDrink} />)
                    })
                }
            </div>

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