import C from "./constants"
import { allDrinks } from "./store/reducers"

const state = [
        {
            "name": "Budweiser",
            "bar": "Side Bar",
            "geo": "TODO-1",
            "price": 2,
            "size": "16 oz",
            "totalDrinks":1,
            "lastDrank": "2017-05-30",
            "drinkId": 0,
            "flags": {
                "invalidPrice" : 0,
                "unavailable": 0
            }
        },
        {
            "name": "Budweiser",
            "bar": "Side Bar",
            "geo": "TODO-2",
            "price": 7,
            "size": "Pitcher",
            "totalDrinks":1,
            "lastDrank": "2017-05-30",
            "drinkId": 1,
            "flags": {
                "invalidPrice" : 0,
                "unavailable": 0
            }
        },
        {
            "name": "Bud Light",
            "bar": "Side Bar",
            "geo": "TODO-3",
            "price": "$2",
            "size": "16 oz",
            "totalDrinks": 1,
            "lastDrank": "2017-05-30",
            "drinkId": 2,
            "flags": {
                "invalidPrice" : 0,
                "unavailable": 0
            }
        }
    ]

const action = {
    type: C.INCREMENT_DRINK,
    payload: 2
}

const nextState = allDrinks(state, action);

console.log(`

    initial state: ${state[2].totalDrinks}
    action: ${JSON.stringify(action)}
    new state: ${nextState[2].totalDrinks}

`);