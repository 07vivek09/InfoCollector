import axios from "axios"

const DoStoreUserDetails = userData =>{
    return axios.post("users",userData);
}

const DoGetAllUsersList = userData =>{
    return axios.get("users")
}

const API =  {
    DoStoreUserDetails,
    DoGetAllUsersList
}

export default API;