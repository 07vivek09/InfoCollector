import {ERROR,UI_LOADING,SHOW_MESSAGE} from "../constants"
import cloneDeep from 'lodash';

const initialState={loading:false,messages:[]}

export default function UIReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case UI_LOADING:{
            newState.loading=actions.payload
            return  {...newState};
        }
        case ERROR :{
            newState.loading = false;
            newState.error = true;
            newState.message = actions.payload
            return  {...newState};
        }
        case SHOW_MESSAGE:{
            
            if(newState.messages === undefined){
                newState.messages = [actions.payload]
            }else{
                newState.messages.push(actions.payload)
            }
            
            return {...newState}
        }

        default:{
            return newState;
        }
    }
}