import React from 'react';
import DrinkList from "../DrinkList/"
import AddDrink from "../AddDrink/"
import initialState from "../../initialState.json"

export default class App extends React.PureComponent {
    render() {
        return (
            <div id="myApp">
                <DrinkList drinks={initialState.allDrinks}/>
                <AddDrink/>
            </div>
        );
    }
}