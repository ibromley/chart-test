import React, { Component } from 'react';
import './App.css';

import Main from './components/Main';
import Navigation from './components/Navigation'

//require('highcharts/indicators/indicators')(Highcharts)
//require('highcharts/indicators/pivot-points')(Highcharts)
//require('highcharts/indicators/macd')(Highcharts)
//require('highcharts/modules/exporting')(Highcharts)
//require('highcharts/modules/map')(Highcharts)


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation/>

        <Main style={{padding: "5px"}}/>
      </div>
    );
  }
}

export default App;
