import React from 'react'
import { Nav } from "../Nav/"
import { Main } from "../Main/"
import { DrinkList } from "../DrinkList/"
import AddDrinkForm from "../AddDrinkForm/"


/**@description: data */
import sampleData from "../../initialState.json"

export const App = (props) => {
     return (
            <div id="myApp">
                <Nav/>
                {(props.location.pathname.match(/^\/drink-list/)) ?
                    <DrinkList drinks={sampleData.allDrinks} filter={props.match.params.filter}/>
                    : 
                    (props.location.pathname === "/add-drink") ? 
                    <AddDrinkForm /> 
                    : <Main/>
                }
            </div> 
        )
}