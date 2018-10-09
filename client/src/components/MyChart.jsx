import React, { Component } from 'react'
import Chart from './Chart'
import Highcharts from 'highcharts/highstock'

class MyChart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          options: {},
        }
      }

    componentDidMount() {
        fetch('https://data.seattle.gov/resource/9nka-b3jn.json')
          .then(response => response.json())
          .then(parsedjson => {
            
            let southlist = [];
            parsedjson.forEach(item => {
              southlist.push([Date.parse(item.date), parseInt(item.bike_south)]);
            });
            let northlist = [];
            parsedjson.forEach(item => {
              northlist.push([Date.parse(item.date), parseInt(item.bike_north)]);
            });

            this.setState({ 
              options: {
                chart: {
                  type: 'timeseries',
                  zoomType: 'x'
                },
                title: {
                  text: 'My chart'
                },
                xAxis: {
                  type: 'datetime'
                },
                yAxis: {
                  title: {
                      text: 'Number of '
                  }
                },
                responsive: {
                  rules: [{
                    condition: {
                      maxWidth: 500
                    }
                  }]
                },
                series: [{
                  type: 'area',
                  name: 'North',
                  data: northlist
                },{
                  type: 'area',
                  name: 'South',
                  data: southlist
                }]
              },
              counter: parsedjson
            }
          )});
      }

    render () {
        return (
            <Chart 
                options={this.state.options}
                highcharts={Highcharts} 
            />
        );

    };

}
  

export default MyChart;