import {FORM_TYPES} from "../constants"
import cloneDeep from 'lodash';

const initialState={ }

export default function FormReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case FORM_TYPES :{
            newState.formTypes = actions.payload
            return newState;
        }
        default:{
            return newState;
        }
    }
}