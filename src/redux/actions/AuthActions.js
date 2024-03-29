import API from "../../Api"
import {SHOW_MESSAGE,USERS_LIST}from "../constants/index"
export const DoStoreUserDetailsAction =(action)=>{
    return (dispatch)=>{
        API.DoStoreUserDetails(action.userData)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"SignIN Successful",
                        key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Unable to SignIN",
                        key:action.key
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
                    key:action.key

                }
            })
        })
    }
}
export const DoGetAllUsersListAction =(action)=>{
    return (dispatch)=>{
        API.DoGetAllUsersList()
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:USERS_LIST,
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