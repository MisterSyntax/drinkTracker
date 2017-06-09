import React from 'react';
import DrinkList from "../DrinkList/"

const initialState = [
        {
            "name": "Budweiser",
            "bar": "Side Bar",
            "geo": "TODO-1",
            "price": 2,
            "size": 16,
            "totalDrinks":1,
            "lastDrank": "2017-05-30",
            "drinkId": 0,
            "flags": {
                "badPrice" : 0,
                "unavailable": 0
            }
        },
        {
            "name": "Budweiser",
            "bar": "Side Bar",
            "geo": "TODO-2",
            "price": 7,
            "size": 64,
            "totalDrinks":1,
            "lastDrank": "2017-05-30",
            "drinkId": 1,
            "flags": {
                "badPrice" : 0,
                "unavailable": 0
            }
        },
        {
            "name": "Bud Light",
            "bar": "Side Bar",
            "geo": "TODO-3",
            "price": 2,
            "size": 16,
            "totalDrinks": 1,
            "lastDrank": "2017-05-30",
            "drinkId": 2,
            "flags": {
                "badPrice" : 0,
                "unavailable": 0
            }
        }
    ];

export default class App extends React.PureComponent {
    render() {
        return (<DrinkList drinks={initialState}/>);
    }
}