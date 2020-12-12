import { createStore, applyMiddleware, compose } from "redux";
import todoReducer from "./components/reducer";
import thunk from "redux-thunk";
const initialState = {};
const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  todoReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);
export default store;
