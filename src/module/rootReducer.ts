/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from "redux";
import counterReducer from "./sampleRedux/reducer";
 

const rootReducer = (history) =>
  combineReducers({
    router: history,
    counter: counterReducer,
  });

export default rootReducer;
