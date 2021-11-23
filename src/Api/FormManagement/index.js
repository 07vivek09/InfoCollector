import axios from "axios"

const DoGetFormTypes = userData =>{
    return axios.get("formType",userData);
}



const API =  {
    DoGetFormTypes
}

export default API;