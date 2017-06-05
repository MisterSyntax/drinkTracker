import C from "../constants"

/**
 * @description: Reducer for managing whether a user drank a drink
 * @param: {number} state - the ammount of drinks currently owned by the drink
 * @param: action -INCREMENT_DRINK, DECREMENT_DRINK
 **/
export const drinkTotal = (state=0, action) => {
    switch(action.type){

        case C.INCREMENT_DRINK:{
            return state+1;
        }
            
        case C.DECREMENT_DRINK:{
            return state-1;
        }
            
        default: {
            return state;
        }
            
    }
    const newState = state+1;
    return newState;
}

/**
 * @description: Reducer for managining individual drinks
 * @param: {object} state - current drink or null 
 * @param: {object} action - ADD_DRINK, INCREMENT_DRINK, DECREMENT_DRINK
 *      @param: {object} payload - the drink we're modifying
 **/
export const drink = (state=null, action) => {
    switch(action.type){
        case C.ADD_DRINK:{
            return (action.type === C.ADD_DRINK) ? 
                action.payload : 
                state;
        }       
        case C.INCREMENT_DRINK:{
            return Object.assign({}, state, {totalDrinks: drinkTotal(state.totalDrinks, action)});
        } 
        case C.DECREMENT_DRINK:{
            return Object.assign({}, state, {totalDrinks: drinkTotal(state.totalDrinks, action)});
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
 **/
export const allDrinks = (state={}, action) => {
    switch(action.type){

        case C.ADD_DRINK:
            //TODO: Strengthen check to see if drink is duplicate
            const hasDrinkAlready = state.some(drink=>
                (action.payload.name ===  drink.name &&
                action.payload.geo ===  drink.geo &&
                action.payload.size ===  drink.size &&
                action.payload.price ===  drink.price
                )
            ) 
            
            return hasDrinkAlready ? 
                state : 
                [
                    ...state, 
                    drink(null, action)
                ];

        case C.REMOVE_DRINK: 
            return state.filter((curr,index)=>{
                return curr.drinkId===action.payload?0:1
            });

        case C.INCREMENT_DRINK:
            //TODO: check to see if user has already incremented
            return state.map((curr,index) => {
                return (curr.drinkId === action.payload) ?
                    drink(curr, action):
                    curr;
            });

        case C.DECREMENT_DRINK:
            //TODO: check to see if user has already decremented
            return state.map((curr,index) => {
                return 
                (curr.drinkId === action.payload 
                && curr.drinkTotal > 0) ?
                    drink(curr, action):
                    curr;
            });

        default:
            return state;
    }

}
    
/**
 * @description: Reducer for adding or removing an error
 * @param: state - current state of drink or null 
 * @param: action - either ADD_ERROR or REMOVE_ERROR
 */
export const error = (state=[], action) => {
    switch(action.type){

        case C.ADD_ERROR:
            return [
                ...state,
                action.payload
            ];

        case C.REMOVE_ERROR:
            return state.filter((message,index)=>index===action.payload?0:1);

        default: 
            return state;

    }
        
}

