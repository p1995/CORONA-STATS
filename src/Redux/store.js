import { createStore, applyMiddleware } from "redux";
import { CoronaReducers } from "./Corona/CoronaReducers";
import thunk from "redux-thunk";
export const store = createStore(CoronaReducers, applyMiddleware(thunk));
