import { combineReducers } from 'redux';

import ReducerWeather from './weather_reducer';
import ReducerSelected from './reducer_selected';


const rootReducer = combineReducers({

cityWeather: ReducerWeather,
selected: ReducerSelected
});

export default rootReducer;
