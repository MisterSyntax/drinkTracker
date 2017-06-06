import C from "./constants"
import appReducer from "./store/reducers"
import { createStore } from "redux"

const store = createStore(appReducer);

const unsubscriberLogger = store.subscribe(
    () => console.log(` Goal: ${store.getState().allDrinks.length}`)
    );

let x = 0;
setInterval(()=> {
    x++;
    store.dispatch({
        type: C.ADD_DRINK,
        payload:  {
            "name": "Budweiser"+x,
            "bar": "Side Bar",
            "geo": "TODO-1",
            "price": 2,
            "size": "16 oz",
            "totalDrinks":1,
            "lastDrank": "2017-05-30",
            "drinkId": 4+x,
            "flags": {
                "badPrice" : 0,
                "unavailable": 0
            }
        }
    });
}, 250)

setTimeout(()=>{
unsubscriberLogger()
}
    ,3000
);