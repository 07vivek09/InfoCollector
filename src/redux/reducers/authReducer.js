import {USERS_LIST} from "../constants"
import cloneDeep from 'lodash';

const initialState={}

export default function AuthReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case USERS_LIST:{
            newState.usersList=actions.payload
            return newState;
        }
        default:{
            return newState;
        }
    }
}