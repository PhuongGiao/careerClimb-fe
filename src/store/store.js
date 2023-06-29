import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
let composeEnhancer;

if (typeof window !== "undefined") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancer = compose;
}

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
