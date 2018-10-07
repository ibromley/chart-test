import React, { Component } from 'react'
import Chart from './Chart'
import Highcharts from 'highcharts/highstock'

class PieChart extends Component {

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
                  type: 'pie',
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
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                        name: 'Chrome',
                        y: 61.41,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Internet Explorer',
                        y: 11.84
                    }, {
                        name: 'Firefox',
                        y: 10.85
                    }, {
                        name: 'Edge',
                        y: 4.67
                    }, {
                        name: 'Safari',
                        y: 4.18
                    }, {
                        name: 'Sogou Explorer',
                        y: 1.64
                    }, {
                        name: 'Opera',
                        y: 1.6
                    }, {
                        name: 'QQ',
                        y: 1.2
                    }, {
                        name: 'Other',
                        y: 2.61
                    }]
                }]
              }
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
  

export default PieChart;