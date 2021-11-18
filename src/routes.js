import React from "react";
const appRoutes = (data)=>{
    const routes =[
        data && data === true?
        {
            path:"/",
            // element:<Layout />,
            children :[
            ]
        }:null,
        
    ]
    return routes.filter(r=>r!==undefined || r!== "")
}

export default appRoutes;