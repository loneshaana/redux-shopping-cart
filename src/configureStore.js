import { createStore, applyMiddleware } from "redux";
import Reducer from "./reducer";
import { createLogger } from "redux-logger";
const enhancers = applyMiddleware(createLogger());
const configureStore = (initialState = {}) => {
  return createStore(Reducer, initialState, enhancers);
};

export default configureStore;
