
import assert from 'assert'
import C from '../src/constants'
import { userLocation, autoLocate } from '../src/store/reducers'
import state from '../src/initialState.json'
import { setUserLocation, enableAutoLocate, disableAutoLocate } from '../src/actionCreators'

//store for tests

import appReducer from '../src/store/reducers';
import { createStore } from 'redux';


console.log(`

----------

`)


const store = createStore(appReducer, state);

//TEST 1.SET_userLocation TEST

const action = {
    type: C.SET_USER_LOCATION,
    payload: {
        'lat': 1,
        'lng': 1
    }
}

const nextState = userLocation(state, action)

describe('userLocation', function () {
    describe('setUserLocation', function () {
        it('it should set userLocation equal to the passed in userLocation', function () {
            assert.deepEqual(nextState, { 'lat': 1, 'lng': 1 })
        })
    })
})

console.log(`

----------

`)

//TEST 2. setuserLocation Action creation

const loco = {
    'lat': 2,
    'lng': 2
}
store.dispatch(setUserLocation(loco));

describe('userLocation', function () {
    describe('setUserLocation action creator', function () {
        it('it should set userLocation equal to the passed in userLocation', function () {
            assert.deepEqual({'lat': store.getState().userLocation.lat, 'lng': store.getState().userLocation.lng} , { 'lat': 2, 'lng': 2 })
        })
    })
})

console.log(`

----------

`)



//3. DISABLE_AUTO_LOCATE test


const nextCanAutoState = autoLocate(true, {
    type: C.DISABLE_AUTO_LOCATE
})

describe('userLocation', function () {
    describe('DISABLE_AUTO_LOCATE', function () {
        it('it should cancel auto locate', function () {
            assert.deepEqual(nextCanAutoState, false)
        })
    })
})

console.log(`

----------

`)


//4. Action creator for disableAutoLocate

store.dispatch(disableAutoLocate());
const autoLocation = store.getState().autoLocate

describe('userLocation', function () {
    describe('cancelAutoLocation action creator', function () {
        it('it should set auto locate off', function () {
            assert.deepEqual(autoLocation, false)
        })
    })
})


console.log(`

----------

`)

//5. ENABLE_AUTO_LOCATE test


const nextAutoState = userLocation(true, {
    type: C.ENABLE_AUTO_LOCATE
})




describe('userLocation', function () {
    describe('ENABLE_AUTO_LOCATE', function () {
        it('it should set autolocate on', function () {
            assert.deepEqual(nextAutoState, true)
        })
    })
})



console.log(`

----------

`)

//6. Action creator for enableAutoLocate

store.dispatch(enableAutoLocate());
const autoLocationOn = store.getState().autoLocate


describe('userLocation', function () {
    describe('setAutoLocation action creator', function () {
        it('it should set auto locate on', function () {
            assert.deepEqual(autoLocationOn, true)
        })
    })
})

