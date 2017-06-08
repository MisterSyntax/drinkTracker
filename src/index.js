import storeFactory from "./store/middleWare";
import { suggestDrinkNames } from "./actionCreators"

const store = storeFactory(JSON.parse(localStorage["thirsty-state"]));

store.dispatch(
    suggestDrinkNames("Bud")
);