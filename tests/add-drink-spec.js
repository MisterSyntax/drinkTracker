
import assert from 'assert'
import C from '../src/constants'
import { allDrinks } from '../src/store/reducers'
import state from '../src/initialState.json'
import { addDrink } from '../src/actionCreators'

//store for tests

import appReducer from '../src/store/reducers';
import { createStore } from 'redux';



const store = createStore(appReducer, state);

//TEST 1.ADD_DRINK TEST

const action = {
    type: C.ADD_DRINK,
    payload: {
            "name": "Budweiser",
            "bar": "Last Drop",
            "geo": "TODO-12",
            "address": "",
            "price": 3,
            "size": 16,
            "totalDrinks": 1,
            "lastDrank": "2017-06-23",
            "drinkId": 10,
            "flags": {
                "badPrice": 0,
                "unavailable": 0
            }
        }
}

const nextState = allDrinks(state.allDrinks, action)

describe('ADD_DRINK', function () {
    describe('reducer', function () {
        it('it should add a drink and increase the amount of drinks by 1', function () {
            assert.deepEqual(nextState.length, state.allDrinks.length + 1)
        })
    })
})



//TEST 2. addDrink()

const drink = {
            name: "Buff's Red",
            bar: "Buff's Pub",
            price: 4.5,
            size: 16,
            geo: {
                lat: 42.3571451,
                lng: -71.18658920000001
            },
            address: "317 Washington St, Newton, MA 02458, USA"
        }


describe('addDrink()', function () {
    describe('action creator', function () {
        let oldCountDrinks = store.getState().allDrinks.length 
        store.dispatch(addDrink(drink));
        it('it should add a drink and increase the all drinks count by 1', function () {
            assert.deepEqual(oldCountDrinks+1, store.getState().allDrinks.length)
        })
    })
})
console.log(store.getState())