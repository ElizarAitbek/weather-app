import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { weatherReducer } from "./reducders/weather-reducer";

const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;
