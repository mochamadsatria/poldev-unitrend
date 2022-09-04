import dynamic from 'next/dynamic'
import React, { Component } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class BarCharts extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          dataLabels: {
            enabled: false
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          grid: {
            show: false,
        },
          xaxis: {
            categories: props.sector,
          },
          yaxis: {
            labels: {
                style: {
                    colors: "#FFFFFF",
                }
            }
          },
          fill: {
            colors: props.fillColor
          },
          theme: {
            palette: 'dark' // upto palette10
          },
          tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: true,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: 'dark',
          },
          chart: {
            toolbar: {
                show: false,
              },
          }
        },
        series: [{
            name: '%-Change',
            data: props.series
        }],
      }
    }
  
    render() {
  
      return (
        <div className="bar">
          <Chart options={this.state.options} series={this.state.series} type="bar" height={300} />
        </div>
      );
    }
  }
  
  export default BarCharts;
  