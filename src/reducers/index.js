import { combineReducers } from "redux";
import CustomerReducer from "./CustomerReducer";

export default combineReducers({
    items: CustomerReducer
})