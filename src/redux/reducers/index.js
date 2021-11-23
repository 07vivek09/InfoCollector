import { combineReducers } from "redux";
import UIReducer from "./uiReducer";
import AuthReducer from "./authReducer";
export default combineReducers({
    ui: UIReducer,
    auth:AuthReducer
})