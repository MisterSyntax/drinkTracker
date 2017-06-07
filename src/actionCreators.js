/**
 * @desc: This file holds all of the action creators
 *  -functions which encapsulate the logic
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 */
import C from "./constants"




/**
 * @desc: Adds a drink
 * @param {string} drink - name of drink
 * @param {string} bar - name of bar
 * @param {price} price - price of drink
 * @param {size} size - size of drink in oz.
 * @return
 */
export const addDrink = (drink, bar, price, size, drinkId) => {

    //Application logic
    const today = new Date();
    const currentYMD = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const newId = drinkId ? drinkId : "TODO" + today.getTime().valueOf();


    return {
        type: C.ADD_DRINK,
        payload: {
            drink,
            bar,
            geo: ("TODOgeo" + today.getTime().valueOf()),
            price,
            size,
            totalDrinks: 1,
            lastDrank: currentYMD,
            drinkId: newId,
            flags: {
                badPrice: 0,
                unavailable: 0
            }
        }
    };
};

export const removeDrink = (drinkId) => {
    return {
        type: C.REMOVE_DRINK,
        payload: drinkId
    }
};

export const incrementDrink = (drinkId) => {
    return {
        type: C.INCREMENT_DRINK,
        payload: drinkId
    };
};

export const decrementDrink = (drinkId) => {
    return {
        type: C.DECREMENT_DRINK,
        payload: drinkId
    };
};

export const flagUnavailable = (drinkId) => {
    return {
        type: C.FLAG_UNAVAILABLE,
        payload: drinkId
    };
};

export const flagPrice = (drinkId) => {
    return {
        type: C.FLAG_PRICE,
        payload: drinkId
    };
};

export const removeFlagUnavailable = (drinkId) => {
    return {
        type: C.REMOVE_FLAG_UNAVAILABLE,
        payload: drinkId
    };
};

export const removeFlagPrice = (drinkId) => {
    return {
        type: C.REMOVE_FLAG_PRICE,
        payload: drinkId
    };
};

export const addError = (errorMessage) => {
    return {
        type: C.ADD_ERROR,
        payload: errorMessage
    };
};

export const removeError = (index) => {
    return {
        type: C.REMOVE_ERROR,
        payload: index
    };
};

export const fetchDrinkSuggestions = () => {
    return {
        type: C.FETCH_DRINK_SUGGESTIONS
    };
};
export const cancelFetchingDrinkSuggestions = () => {
    return {
        type: C.CANCEL_FETCHING_DRINK_SUGGESTIONS,
    };
};

export const fetchBarSuggestions = () => {
    return {
        type: C.FETCH_BAR_SUGGESTIONS
    };
};

export const cancelFetchingBarSuggestions = () => {
    return {
        type: C.CANCEL_FETCHING_BAR_SUGGESTIONS,
    };
};

export const clearDrinkSuggestions = () => {
    return {
        type: C.CLEAR_DRINK_SUGGESTIONS
    }
};

export const clearBarSuggestions = () => {
    return {
        type: C.CLEAR_BAR_SUGGESTIONS
    }
};

export const changeDrinkSuggestons = (suggestions) => {
    return {
        type: C.CHANGE_DRINK_SUGGESTIONS,
        payload: suggestions
    }
};

export const changeBarSuggestons = (suggestions) => {
    return {
        type: C.CHANGE_BAR_SUGGESTIONS,
        payload: suggestions
    }
};

/**
 * @description: A thunk which returns a function witch takes
 * @param {function} dispatch - the store's dispatch method
 * @param {function} getState - the store's getState method
 * @return
 */
export const randomErrors = () => (dispatch, getState) => {
    if (!getState().barNames.fetchingBars) {
        dispatch({
            type: C.FETCH_BAR_SUGGESTIONS,
        })
        setTimeout(() => {
            dispatch({
                type: C.CANCEL_FETCHING_BAR_SUGGESTIONS
            })
        
        }, 1500);
    }


}