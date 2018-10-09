import React from 'react'
import HighchartsReact from 'highcharts-react-official'

const Chart = ({ options, highcharts }) => {
    return (
      <HighchartsReact
        highcharts={highcharts}
        constructorType={'chart'}
        options={options}
      />
    );
}
  

export default Chart