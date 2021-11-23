import axios from "axios"

const DoStoreUserDetails = userData =>{
    return axios.post("users",userData);
}

const API =  {
    DoStoreUserDetails,
   
}

export default API;