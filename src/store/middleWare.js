/**
 * @description: This file is used to help create middleware for our stores, by making something that exports stores
 * - middleware - allows us to give functionality to the dispatch pipeline
 *  - gives us control over how actions are dispatched
 *      - add functionality before or after action is dispatched
 *      - skip dispatching an action
 *      - delay dispatching of action
 *  -Often stored in index.js in store
 */
import C from "../constants";
import appReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";

/**used to handle asynchronisity in middleware */
import thunk from "redux-thunk";

const consoleMessages = (store) => (next) => (action) => {

    let result;

    //before action;
    console.groupCollapsed(`dispatching => ${action.type}`);
    console.log("drinks: ", store.getState().allDrinks.length);

    //dispatch action
    result = next(action);

    //after action
    let {allDrinks, barNames, drinkNames, errors} = store.getState();

    console.log(`

        Drinks: ${allDrinks.length}
        Bar Names: ${barNames.suggestions}
        Drink 0 Drank: ${allDrinks[0].totalDrinks}
        Drink 0 Flags" ${JSON.stringify(allDrinks[0].flags)}
        Error Messages: ${errors}
        Fetching barNames: ${barNames.fetchingBars}
        Bar Suggestions: ${barNames.suggestionsBar}
        Fetching Drink Suggestions: ${drinkNames.fetchingDrinks}
        Drink Suggestions: ${drinkNames.suggestionsDrink}

    
    `);
    localStorage["thirsty-state"] = JSON.stringify(store.getState());
    console.groupEnd();

    return result;

};

/**
 * @description: This will create a store 
 * @param {object} - initial state of the store
 * @returns {store} - a redux data store
 */
export default (initialState={}) => {
    //we create a add our consoleMessages middleware to our created store with appReducer and initialState defining that store
    //we add thunk for asynchronisity
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer,initialState);
}