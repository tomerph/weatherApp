import axios from 'axios';

const API_KEY = 'd2bd923726d8850b7677856f80cb52cd';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SELECTED_CITY = 'SELECTED_CITY';

export function fetchWeather(city){

  const request = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},il&appid=${API_KEY}&units=metric`);

  return{
    type:FETCH_WEATHER,
    payload:request
  }
}


export function selectedCity(city){
  return{
    type:SELECTED_CITY,
    payload:city
  }
}
