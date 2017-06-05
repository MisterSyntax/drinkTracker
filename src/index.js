import C from "./constants"
import appReducer from "./store/reducers"
import initialState from "./initialState"; 

let state = initialState;

console.log(`

    initial state:
    =============
    Total Drinks: ${state.allDrinks.length}
    Drink Suggestions: ${state.drinkNames.suggestions}


`);

state = appReducer(state, {
    type: C.ADD_DRINK,
    payload: {
            "name": "Budweiser",
            "bar": "Coogan's",
            "geo": "TODO-1",
            "price": 1,
            "size": "16 oz",
            "totalDrinks":1,
            "lastDrank": "2017-06-05",
            "drinkId": 3,
            "flags": {
                "badPrice" : 0,
                "unavailable": 0
            }
        }
});
state = appReducer(state, {
    type: C.CHANGE_DRINK_SUGGESTIONS,
    payload: ["cat piss", "vinegar", "tears"]
})


console.log(`

    Next state:
    =============
    Total Drinks: ${state.allDrinks.length}
    Drink Suggestions: ${state.drinkNames.suggestions}

`);