import React, { Component } from 'react'
import Chart from './Chart'
import Highcharts from 'highcharts/highstock'

class ServChart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          options: {},
        }
      }

    componentDidMount() {
        fetch("http://localhost:8080/burke")
          .then(response => response.json())
          .then(parsedjson => {
            
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
                  data: parsedjson
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
  

export default ServChart;