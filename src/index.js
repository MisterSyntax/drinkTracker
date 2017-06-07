import storeFactory from "./store/middleWare";
import { randomErrors } from "./actionCreators"

const store = storeFactory(JSON.parse(localStorage["thirsty-state"]));

store.dispatch(
    randomErrors()
);
store.dispatch(
    randomErrors()
);