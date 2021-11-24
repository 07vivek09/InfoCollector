import {ERROR,UI_LOADING,SHOW_MESSAGE} from "../constants"
import cloneDeep from 'lodash';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

const initialState={ }

export default function NavReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
      
        default:{
            newState.tabs =[{
                title: "Form Management",
                url:"/home",
                icon : <AddBusinessIcon />
            },{
                title: "response Management",
                url:"/response",
                icon:<BuildCircleIcon />
            },
            ] 
            return newState;
        }
    }
}