/** * @description: redux dependencies */
import storeFactory from './store/middleWare'
import { suggestDrinkNames } from './actionCreators'
import C from './constants'

/** * @description: react dependencies */
import React from 'react'
import { render } from 'react-dom'

/**@description: components */
import App from './components/App/'

/**@description: data */
import sampleData from './initialState.json'



//TODO remove state stuff
window.React = React;


/**
 * @description: State stuff 
 */

const initialState = (localStorage["thirsty-state"]) ?
    JSON.parse(localStorage["thirsty-state"]) :
    sampleData;

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

//create our store
const store = storeFactory(initialState);
//save our state whenever we change the state by subscribing
store.subscribe(saveState);

//TODO: Remove debug store & React
window.store = store
window.React

//sample dispatch
/**
store.dispatch(
    suggestDrinkNames("Bud")
);
**/



/** *@description UI Stuff */
render(
   <App/>
, document.getElementById('react-container'))
