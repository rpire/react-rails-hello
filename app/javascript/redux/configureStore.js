import { combineReducers, createStore } from "redux";
import greetingsReducer from "./greetings/greetings";

const rootReducer = combineReducers({
  greeting: greetingsReducer,
});

const store = createStore(rootReducer);

export default store;