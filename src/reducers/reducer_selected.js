import {SELECTED_CITY} from '../actions/index';


export default function(state = null, action){

  switch(action.type){
    case SELECTED_CITY:
    return action.payload;
  }

return state;
}
