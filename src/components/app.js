import React, { Component } from 'react';
import WeatherList from './weather_list';
import Main from './main_area';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="weather-list">
              <WeatherList />
            </div>
              <div className="main">
                <Main />
                  </div>
      </div>

    );
  }
}
