import C from "../constants"
import { combineReducers } from "redux"

/**
 * @description: Reducer for managing whether a user drank a drink
 * @param: {number} state - the ammount of drinks currently owned by the drink
 * @param: action -INCREMENT_DRINK, DECREMENT_DRINK
 **/
export const drinkTotal = (state = 0, action) => {
    switch (action.type) {

        case C.INCREMENT_DRINK: {
            return state + 1;
        }

        case C.DECREMENT_DRINK: {
            return state - 1;
        }

        default: {
            return state;
        }

    }
    const newState = state + 1;
    return newState;
}


/**
 * @description: Reducer for managing whether the flags on a drink
 * @param: {object} state - the current number of flag for the drink
 * @param: action - FLAG_PRICE,REMOVE_FLAG_PRICE, FLAG_UNAVAILABLE, REMOVE_FLAG_UNAVAILABLE
 * @TODO: MANAGE PER USER BASIS
 **/
export const flag = (state = 0, action) => {
    //TODO: Manage flags per user basis
    switch (action.type) {
        case C.FLAG_PRICE: {
            return state + 1;
        }
        case C.REMOVE_FLAG_PRICE: {
            return (state > 0) ?
                state - 1 :
                state;
        }
        case C.FLAG_UNAVAILABLE: {
            return state + 1;
        }
        case C.REMOVE_FLAG_UNAVAILABLE: {
            return (state > 0) ?
                state - 1 :
                state;
        }
        default: return state;
    }
}

/**
 * @description: Reducer for managing whether the flags on a drink
 * @param: {object} state - the current number of flag for the drink
 * @param: action - FLAG_PRICE,REMOVE_FLAG_PRICE, FLAG_UNAVAILABLE, REMOVE_FLAG_UNAVAILABLE
 **/
export const allFlags = (state = {}, action) => {
    //TODO: Manage flags per user basis
    //OPT NOTE: could really just drop the cases and do as 1...
    //or could use fall through
    switch (action.type) {
        case C.FLAG_PRICE: {
            return Object.assign({}, state, { badPrice: flag(state.badPrice, action) });
        }
        case C.REMOVE_FLAG_PRICE: {
            return Object.assign({}, state, { badPrice: flag(state.badPrice, action) });
        }
        case C.FLAG_UNAVAILABLE: {
            return Object.assign({}, state, { unavailable: flag(state.unavailable, action) });
        }
        case C.REMOVE_FLAG_UNAVAILABLE: {
            return Object.assign({}, state, { unavailable: flag(state.unavailable, action) });
        }
        default: return state;
    }
}


/**
 * @description: Reducer for managining individual drinks
 * @param: {object} state - current drink or null 
 * @param: {object} action - ADD_DRINK, INCREMENT_DRINK, DECREMENT_DRINK, FLAG_PRICE,REMOVE_FLAG_PRICE,FLAG_UNAVAILABLE,REMOVE_FLAG_UNAVAILABLE
 *      @param: {object} payload - the drink we're modifying
 **/
export const drink = (state = {}, action) => {

    switch (action.type) {

        case C.ADD_DRINK: {
            return (action.type === C.ADD_DRINK) ?
                action.payload :
                state;
        }

        case C.INCREMENT_DRINK: {
            return Object.assign({}, state, { totalDrinks: drinkTotal(state.totalDrinks, action) });
        }

        case C.DECREMENT_DRINK: {
            return Object.assign({}, state, { totalDrinks: drinkTotal(state.totalDrinks, action) });
        }

        case C.FLAG_PRICE: {
            return Object.assign({}, state, { flags: allFlags(state.flags, action) });
        }

        case C.REMOVE_FLAG_PRICE: {
            return Object.assign({}, state, { flags: allFlags(state.flags, action) });
        }

        case C.FLAG_UNAVAILABLE: {
            return Object.assign({}, state, { flags: allFlags(state.flags, action) });
        }

        case C.REMOVE_FLAG_UNAVAILABLE: {
            return Object.assign({}, state, { flags: allFlags(state.flags, action) });
        }

        default: {
            return state;
        }

    }

}


/**
 * @description: Reducer for managing all drinks
 * @param: state - current state of all drinks or an empty objext 
 * @param: action - either ADD_DRINK, REMOVE_DRINK, INCREMENT_DRINK, or DECREMENT_DRINK 
 *      @param: payload - ADD_DRINK : new drink object
 *                  - REMOVE_DRINK : id of drink to remove
 *                  - INCREMENT_DRINK : id of drink to increment
 *                  - DECREMENT_DRINK : id of drink to decrement
 **/
export const allDrinks = (state = [], action) => {

    switch (action.type) {

        case C.ADD_DRINK: {
            //TODO: Strengthen check to see if drink is duplicate
            const hasDrinkAlready = state.some(drink =>
                (action.payload.name === drink.name &&
                    action.payload.geo === drink.geo &&
                    action.payload.size === drink.size &&
                    action.payload.price === drink.price
                )
            )

            return hasDrinkAlready ?
                state :
                [
                    ...state,
                    drink(null, action)
                ];
        }

        case C.REMOVE_DRINK: {
            return state.filter((curr, index) => {
                return curr.drinkId === action.payload ? 0 : 1
            });
        }

        case C.INCREMENT_DRINK: {
            //TODO: check to see if user has already incremented
            return state.map((curr, index) => {
                return (curr.drinkId === action.payload) ?
                    drink(curr, action) :
                    curr;
            });
        }


        case C.DECREMENT_DRINK: {
            //TODO: check to see if user has already decremented
            return state.map((curr, index) => {
                return (curr.drinkId === action.payload) ?
                    drink(curr, action) :
                    curr;
            });
        }

        case C.FLAG_PRICE: {
            return state.map((curr, index) => {
                return (curr.drinkId === action.payload) ?
                    drink(curr, action) :
                    curr;
            });
        }

        case C.REMOVE_FLAG_PRICE: {
            return state.map((curr, index) => {
                return (curr.drinkId === action.payload) ?
                    drink(curr, action) :
                    curr;
            });
        }

        case C.FLAG_UNAVAILABLE: {
            return state.map((curr, index) => {
                return (curr.drinkId === action.payload) ?
                    drink(curr, action) :
                    curr;
            });
        }

        case C.REMOVE_FLAG_UNAVAILABLE: {
            return state.map((curr, index) => {
                return (curr.drinkId === action.payload) ?
                    drink(curr, action) :
                    curr;
            });
        }


        default:
            return state;
    }

}

/**
 * @description: Reducer for adding or removing an error
 * @param: state - current state of drink or null 
 * @param: action - either ADD_ERROR or REMOVE_ERROR
 *  - either an error message or 
 */
export const errors = (state = [], action) => {
    switch (action.type) {


        case C.ADD_ERROR:
            return [
                ...state,
                action.payload
            ];

        case C.REMOVE_ERROR:
            return state.filter((message, index) => index === action.payload ? 0 : 1);

        default:
            return state;

    }

}



/**
 * @description: Reducer for managing wether we're fetching suggestions
 * @param: {boolean} state - state of wether we're fetching drinks or bars
 * @param: action - either FETCH_DRINK_SUGGESTIONS, CANCEL_FETCHING_DRINK_SUGGESTIONS
 */
export const fetchingBars = (state = false, action) => {

    switch (action.type) {

        case C.FETCH_BAR_SUGGESTIONS: {
            return true;
        }

        case C.CANCEL_FETCHING_BAR_SUGGESTIONS: {
            return false;
        }

        case C.CHANGE_BAR_SUGGESTIONS: {
            return false;
        }

        default: {
            return state;
        }
    }
}



/**
 * @description: For changing and clearing drink suggestions
 * @param: {array} state - the array of suggestions 
 * @param: action - CLEAR_BAR_SUGGESTIONS, CHANGE_BAR_SUGGESTIONS
 */
export const suggestionsBar = (state = [], action) => {

    switch (action.type) {

        case C.CLEAR_BAR_SUGGESTIONS: {
            return [];
        }

        case C.CHANGE_BAR_SUGGESTIONS: {
            return action.payload;
        }

        default: {
            return state;
        }


    }
}

/**
 * @description: Reducer for managing wether we're fetching drink suggestions
 * @param: {boolean} state - state of wether we're fetching drinks
 * @param: action - either FETCH_DRINK_SUGGESTIONS, CANCEL_FETCHING_DRINK_SUGGESTIONS, CHANGE_DRINK_SUGGESTIONS
 */
export const fetchingDrinks = (state = false, action) => {

    switch (action.type) {

        case C.FETCH_DRINK_SUGGESTIONS: {
            return true;
        }

        case C.CANCEL_FETCHING_DRINK_SUGGESTIONS: {
            return false;
        }

        case C.CHANGE_DRINK_SUGGESTIONS: {
            return false;
        }

        default: {
            return state;
        }
    }
}

/**
 * @description: For changing and clearing drink suggestions
 * @param: {array} state - the array of suggestions 
 * @param: action - CLEAR_DRINK_SUGGESTIONS, CHANGE_DRINK_SUGGESTIONS
 */
export const suggestionsDrink = (state = [], action) => {

    switch (action.type) {


        case C.CLEAR_DRINK_SUGGESTIONS: {
            return [];
        }

        case C.CHANGE_DRINK_SUGGESTIONS: {
            return action.payload;
        }

        default: {
            return state;
        }


    }
}

/**
 * @description: Reducer for adding or removing an error
 * @param: state - current state of drink or null 
 * @param: action - either C.GET_LOCATION or C.SET_LOACTION
 *  - either an error message or 
 */
export const location = (state = {}, action) => {

    switch (action.type) {

        case C.SET_LOCATION: {
            return action.payload;
        }            

        default:
            return state;

    }

}



export default combineReducers({
    allDrinks,
    errors,
    barNames: combineReducers({
        fetchingBars,
        suggestionsBar
    }),
    drinkNames: combineReducers({
        fetchingDrinks,
        suggestionsDrink
    }),
    location
})