/** * @description: redux dependencies */
import storeFactory from "./store/middleWare";
import { suggestDrinkNames } from "./actionCreators"

/** * @description: react dependencies */
import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App/"

/** *@description UI Stuff */



ReactDOM.render(
    <App />
, document.getElementById("react-container"));







/**
 * @description: State stuff 
 */

const store = storeFactory(JSON.parse(localStorage["thirsty-state"]));

store.dispatch(
    suggestDrinkNames("Bud")
);