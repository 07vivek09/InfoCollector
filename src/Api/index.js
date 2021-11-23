import axios from "axios";
import authAPI from "./Auth";
debugger
axios.defaults.baseURL = process.env.REACT_APP_BACKEND
const API = {
...authAPI,
}
export default API