import C from "./constants"
import { suggestions } from "./store/reducers"

const state = ["Budweiser", "Bud Light", "PBR", "Sculpin"];
    

const action = {
    type: C.CHANGE_BAR_SUGGESTIONS,
    payload: ["1","2","3"]
};

const nextState = suggestions(state, action);

console.log(`

    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`);