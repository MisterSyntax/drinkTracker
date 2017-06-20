
import assert from 'assert'
import C from "../src/constants"
import { location } from "../src/store/reducers"
import state from "../src/initialState.json"
import { setLocation } from "../src/actionCreators"

//store for tests

import appReducer from "../src/store/reducers";
import { createStore } from "redux";


const store = createStore(appReducer, state);

//SET_LOCATION TEST

const action = {
	type: C.SET_LOCATION,
	payload: {
		"lat":1,
        "lng":1
	}
}


const nextState = location(state,action)

describe('Location', function () {
     describe('setLocation', function () {
        it('it should set location equal to the passed in location', function () {   
            assert.deepEqual(nextState, {"lat":1,"lng":1})
        })
    })
})



//setLocation Action creation

const loco = {
		"lat":2,
        "lng":2
	}


store.dispatch(setLocation(loco));

describe('Location', function () {
     describe('setLocation action creator', function () {
        it('it should set location equal to the passed in location', function () {
            
            assert.deepEqual(store.getState().location, {"lat":2,"lng":2})
        })
    })
})