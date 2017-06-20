/** * @description: redux dependencies */
import storeFactory from './store/middleWare'
import C from './constants'


/**@description: React redux dependencies
 * @description - Provider: - can wrap around any component tree and will palce the store in context
 *  -allows any child element to interact with the store
 */
import { Provider } from 'react-redux'


/** * @description: react dependencies
 */
import React from 'react'
import { render } from 'react-dom'


/**@description: components */
import App from './components/App/'


/**@description: data */
import sampleData from './initialState.json'


/**
 * @description: State stuff 
 */
const initialState = (localStorage['thirsty-state']) ?
    JSON.parse(localStorage['thirsty-state']) :
    sampleData;

const saveState = () => 
    localStorage['redux-store'] = JSON.stringify(store.getState())

//create our store
const store = storeFactory(initialState);

//save our state whenever we change the state by subscribing
store.subscribe(saveState);

//TODO: Remove debug store & React
window.store = store
window.React


/** *@description UI Stuff */
render(
    <Provider store={store}>
        <App/>
   </Provider>
, document.getElementById('react-container'))
