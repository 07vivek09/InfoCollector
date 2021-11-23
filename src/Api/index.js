import axios from "axios";
import authAPI from "./Auth";
import FormManagementAPI from "./FormManagement"
axios.defaults.baseURL = process.env.REACT_APP_BACKEND
const API = {
...authAPI,
...FormManagementAPI
}
export default API