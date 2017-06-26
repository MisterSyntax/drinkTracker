
import assert from 'assert'
import C from '../src/constants'
import { allDrinks } from '../src/store/reducers'
import state from '../src/initialState.json'
import { removeDrink } from '../src/actionCreators'

//store for tests

import appReducer from '../src/store/reducers';
import { createStore } from 'redux';



const store = createStore(appReducer, state);

console.log(state)

//TEST 1.REMOVE_DRINK TEST

const action = {
    type: C.REMOVE_DRINK,
    payload: 2
}

const nextState = allDrinks(state.allDrinks, action)

describe('REMOVE_DRINK', function () {
    describe('reducer', function () {
        it('it should remove a drink and decrease the amount of drinks by 1', function () {
            assert.deepEqual(nextState.length, state.allDrinks.length -1)
        })
    })
})



//TEST 2. addDrink()

const drink = 2


describe('removeDrink()', function () {
    describe('action creator', function () {
        let oldCountDrinks = store.getState().allDrinks.length 
        store.dispatch(removeDrink(drink));
        it('it should remove a drink and decrease the all drinks count by 1', function () {
            assert.deepEqual(oldCountDrinks-1, store.getState().allDrinks.length)
        })
    })
})