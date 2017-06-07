import storeFactory from "./store/middleWare";
import { 
    fetchDrinkSuggestions,
    cancelFetchingDrinkSuggestions,
    clearDrinkSuggestions,
    changeDrinkSuggestons,
    fetchBarSuggestions,
    cancelFetchingBarSuggestions,
    clearBarSuggestions,
    changeBarSuggestons
     } from "./actionCreators"

const store = storeFactory(JSON.parse(localStorage["thirsty-state"]));

store.dispatch(
    fetchBarSuggestions()
)

store.dispatch(
    changeBarSuggestons(["123","1325"])
)
store.dispatch(
    clearBarSuggestions()
)

store.dispatch(
    cancelFetchingBarSuggestions()
);

store.dispatch(
    fetchDrinkSuggestions()
)

store.dispatch(
    changeDrinkSuggestons(["beer","beer2","cran-apple"])
)

store.dispatch(
    clearDrinkSuggestions()
)

store.dispatch(
    cancelFetchingDrinkSuggestions()
);
