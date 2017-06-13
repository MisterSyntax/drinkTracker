/** * @description: redux dependencies */
import storeFactory from "./store/middleWare"
import { suggestDrinkNames } from "./actionCreators"

/** * @description: react dependencies */
import React from "react"
import ReactDOM from "react-dom"

/**@description: Components- TODO move to routes.js */
import { App } from "./components/App/"
import Whoops404 from "./components/Whoops404"
import AddDrinkForm from "./components/AddDrinkForm/"

/**@description: routing */
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


/**@description: data */
import sampleData from "./initialState.json"

//TODO remove state stuff
window.React = React;


/**
 * @description: State stuff 
 */


/** *@description UI Stuff */
ReactDOM.render(
    <Router>
        <div>
            <Route exact path= "/" component={App}/>
            <Route path="/add-drink" component={App}/>        
            <Route exact path="/drink-list" component={App}/>
            <Route exact path="/drink-list/:filter" component={App}/> 
            <Route component={Whoops404}/>
        </div>
    </Router>
, document.getElementById("react-container"))
