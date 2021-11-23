import { combineReducers } from "redux";
import UIReducer from "./uiReducer";
import AuthReducer from "./authReducer";
import NavReducer from "./navigationReducer";
export default combineReducers({
    ui: UIReducer,
    auth:AuthReducer,
    nav:NavReducer,
})