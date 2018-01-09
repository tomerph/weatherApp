import React,{Component} from 'react';
import {fetchWeather} from '../actions/index';


import {connect} from 'react-redux';


const cities= [
  {name:'Ashdod', value:'ashdod'},
    {name:'jaffa', value:'jaffa'},
      {name:'Jerusalem', value:'jerusalem'},
        {name:'Haifa', value:'haifa'},
        {name:'Eilat', value:'eilat'}
]

class WeatherList extends Component{



  getCurrentWeather(city){
    this.props.fetchWeather(city);

      let main = document.querySelector(".main-content")
        main.style.display = 'none';
        setTimeout(function(){
        main.style.display = 'flex'; }, 0);
  }


  render(){
    var listItem = cities.map((city) =>{
        return(<li key ={city.value} onClick={() => {
          this.getCurrentWeather(city.value)}}>{city.name}</li>)
      });

          return(<ul>{listItem}</ul>)

          }


    }

function mapStateToProps(state){
    return {

      cityWeather: state.cityWeather

    }
}


export default connect(mapStateToProps, {fetchWeather})(WeatherList);
