import { combineReducers } from "redux";
import { newsReducer } from "./newsReducers";

const rootReducers = combineReducers({
    NewsList : newsReducer
});

export default rootReducers;