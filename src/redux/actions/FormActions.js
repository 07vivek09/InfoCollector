import API from "../../Api"
import {SHOW_MESSAGE,FORM_TYPES}from "../constants/index"
export const DoGetFormTypesAction =(action)=>{
    return (dispatch)=>{
        API.DoGetFormTypes()
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:FORM_TYPES,
                    payload:response
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Unable to SignIN",
                    }
                })
            }
        })
        .catch(err=>{
            dispatch({
                type:SHOW_MESSAGE,
                payload:{
                    type:"error",
                    message:err&& err.response && err.response.data && err.response.data.details,
     
                }
            })
        })
    }
}