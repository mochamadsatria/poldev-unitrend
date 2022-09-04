import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class LineCharts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: Array.from(new Array(52), (x, i) => i + 1),
          labels: {
            style: {
                colors: "#FFFFFF",
            }
          }
        },
        yaxis: {
          labels: {
              style: {
                  colors: "#FFFFFF",
              }
          }
        },
        legend: {
          labels: {
            colors: "#FFFFFF",
          }
        },
        colors:['#07818F', '#DA127D']
      },
      series: [{
        name: "2021",
        data: props.trendsData2021
      },
      {
        name: "2022",
        data: props.trendsData2022
      }],
    }
  }

  render() {

    return (
      <div className="line">
        <Chart options={this.state.options} series={this.state.series} type="line" height={400} />
      </div>
    );
  }
}

export default LineCharts;