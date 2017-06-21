/**
 * @desc: This file holds all of the action creators
 *  -functions which encapsulate the logic
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 */
import C from "./constants"

//isomorphic allows us to fetch data from servers
import fetch from "isomorphic-fetch"



/**
 * @desc: Adds a drink
 * @param {string} drink - name of drink
 * @param {string} bar - name of bar
 * @param {price} price - price of drink
 * @param {size} size - size of drink in oz.
 * @return
 */
export const addDrink = (name, bar, price, size, drinkId) => {

    //Application logic
    const today = new Date()
    const currentYMD = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    const newId = drinkId ? drinkId : parseInt(today.getTime().valueOf())


    return {
        type: C.ADD_DRINK,
        payload: {
            name,
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
    }
}

export const removeDrink = (drinkId) => {
    return {
        type: C.REMOVE_DRINK,
        payload: drinkId
    }
}

export const incrementDrink = (drinkId) => {
    return {
        type: C.INCREMENT_DRINK,
        payload: drinkId
    }
}

export const decrementDrink = (drinkId) => {
    return {
        type: C.DECREMENT_DRINK,
        payload: drinkId
    }
}

export const flagUnavailable = (drinkId) => {
    return {
        type: C.FLAG_UNAVAILABLE,
        payload: drinkId
    }
}

export const flagPrice = (drinkId) => {
    return {
        type: C.FLAG_PRICE,
        payload: drinkId
    }
}

export const removeFlagUnavailable = (drinkId) => {
    return {
        type: C.REMOVE_FLAG_UNAVAILABLE,
        payload: drinkId
    }
}

export const removeFlagPrice = (drinkId) => {
    return {
        type: C.REMOVE_FLAG_PRICE,
        payload: drinkId
    }
}

export const addError = (errorMessage) => {
    return {
        type: C.ADD_ERROR,
        payload: errorMessage
    }
}

export const removeError = (index) => {
    return {
        type: C.REMOVE_ERROR,
        payload: index
    }
}

export const fetchDrinkSuggestions = () => {
    return {
        type: C.FETCH_DRINK_SUGGESTIONS
    }
}
export const cancelFetchingDrinkSuggestions = () => {
    return {
        type: C.CANCEL_FETCHING_DRINK_SUGGESTIONS,
    }
}

export const fetchBarSuggestions = () => {
    return {
        type: C.FETCH_BAR_SUGGESTIONS
    }
}

export const cancelFetchingBarSuggestions = () => {
    return {
        type: C.CANCEL_FETCHING_BAR_SUGGESTIONS,
    }
}

export const clearDrinkSuggestions = () => {
    return {
        type: C.CLEAR_DRINK_SUGGESTIONS
    }
}

export const clearBarSuggestions = () => {
    return {
        type: C.CLEAR_BAR_SUGGESTIONS
    }
}

export const changeDrinkSuggestons = (suggestions) => {
    return {
        type: C.CHANGE_DRINK_SUGGESTIONS,
        payload: suggestions
    }
}

export const changeBarSuggestons = (suggestions) => {
    return {
        type: C.CHANGE_BAR_SUGGESTIONS,
        payload: suggestions
    }
}

/**
 * @description: A thunk which returns a function witch takes
 * @param {function} dispatch - the store's dispatch method
 * @param {function} getState - the store's getState method
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

        }, 1500)
    }


}

/**
 * @description: A thunk which gives suggested beer names given the input param
 * @param {string} vale - the charachters the user has input so far
 */

export const suggestDrinkNames = (value) => (dispatch, getState) => {

    //flag that we're fetching suggestions
    dispatch({
        type: C.FETCH_DRINK_SUGGESTIONS
    })

    //fetch the suggestions, returns a promise
    fetch("http://localhost:3333/drinkNames/" + value)
        .then((response) => response.json())
        .then((suggestions) => {
            dispatch({
                type: C.CHANGE_DRINK_SUGGESTIONS,
                payload: suggestions
            })
        })
        .catch((error) => {
            dispatch(
                addError(error.message)
            )

            dispatch(
                cancelFetchingDrinkSuggestions()
            )
        }


        )

    //

}

/**
 * @description: A thunk which gives suggested beer names given the input param
 * @param {string} value - the charachters the user has input so far
 */

export const suggestBarNames = (value) => (dispatch, getState) => {

    //flag that we're fetching suggestions
    dispatch({
        type: C.FETCH_BAR_SUGGESTIONS
    })

    //fetch the suggestions, returns a promise
    fetch("http://localhost:3333/barNames/" + value)
        .then((response) => response.json())
        .then((suggestions) => {
            dispatch({
                type: C.CHANGE_BAR_SUGGESTIONS,
                payload: suggestions
            })
        })
        .catch((error) => {
            dispatch(
                addError(error.message)
            )

            dispatch(
                cancelFetchingBarSuggestions()
            )
        }


        )


}

export const setUserLocation = (userLocation) => {
    return {
        type: C.SET_USER_LOCATION,
        payload: userLocation
    }
}

export const enableAutoLocate = () => {
    return {
        type: C.ENABLE_AUTO_LOCATE
    }
}

export const disableAutoLocate = () => {
    return {
        type: C.DISABLE_AUTO_LOCATE
    }
}