
import {FETCH_WEATHER} from '../actions/index.js';


export default function (state={}, action){
  switch(action.type){
    case FETCH_WEATHER:
    console.log('getweather',action.payload);


    return state = action.payload;



    default:
    return state;
  }
}
