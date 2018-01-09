import React ,{Component} from 'react';

import {connect} from 'react-redux';



class Main extends Component{
componentDidUpdate(){
  if(this.props.cityWeather.data){
    console.log('hotcold', this.props.cityWeather.data.main.temp);
    var hotCold = document.querySelector('.main-content');
    if(this.props.cityWeather.data.main.temp >=18){
      hotCold.style.color='#f1c40f';
    }
    else {
        hotCold.style.color='#7f8c8d';
    }
  }
}
  render(){

    if(!this.props.cityWeather.data)
    return <h1>Please Select A City...</h1>;


    return(

      <div className='main-content'>

                  <h1> {this.props.cityWeather.data.name}, IL </h1>
                      <p><span className='ion-ios-partlysunny'> </span>  Today Forecast:  {this.props.cityWeather.data.weather[0].description}</p>
                        <p><span className='ion-thermometer'> </span> Temp : {this.props.cityWeather.data.main.temp } c</p>
                          <p> <span className='ion-ios-cloud'> </span> Clouds: {this.props.cityWeather.data.clouds.all} %</p>
                            <p> <span className='ion-waterdrop'> </span> Humidity: {this.props.cityWeather.data.main.humidity} %</p>


        </div>
    );

  }
}

function mapStateToProps(state){
  return{
    
    cityWeather: state.cityWeather
  }
}

export default connect(mapStateToProps)(Main);
