import { thunk } from "redux-thunk";
import { legacy_createStore as createStore, compose } from "redux";
import { applyMiddleware } from "redux";
import rootReducers from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))