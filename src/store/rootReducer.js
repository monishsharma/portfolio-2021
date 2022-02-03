import navReducer from "./reducers/nav/reducer";
import { combineReducers } from "redux";

const rootReducer  = combineReducers({
    UI: navReducer
});

export default rootReducer;