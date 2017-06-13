/** * @description: redux dependencies */
import storeFactory from './store/middleWare'
import { suggestDrinkNames } from './actionCreators'

/** * @description: react dependencies */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/'




/**@description: data */
import sampleData from './initialState.json'

//TODO remove state stuff
window.React = React;


/**
 * @description: State stuff 
 */


/** *@description UI Stuff */
ReactDOM.render(
   <App/>
, document.getElementById('react-container'))
