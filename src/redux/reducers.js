import { combineReducers } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice"; 

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

export default rootReducer;
