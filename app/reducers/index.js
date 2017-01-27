import {combineReducers} from "redux";
import count from "./count";
import tags from "./tags";
import {routerReducer as routing} from "react-router-redux";

export default combineReducers({
    count,
    tags,
    routing,
});