import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/dist/echarts';
import 'echarts-gl/dist/echarts-gl.js';

class Index extends React.Component {

  render() {

    const option = {
      backgroundColor: '#fff',
      xAxis3D: {
        type: 'category',
        data: ['Mon', 'Tue', {
          value: 'Wed',
          textStyle: {
            fontSize: 18,
            color: '#008'
          }
        }, 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
          lineStyle: {
            width: 5,
            color: '#900'
          }
        },
        splitLine: {
          interval: 1
        }
      },
      yAxis3D: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      zAxis3D: {
        type: 'value',
        min: 0, max: 100
      },
      grid3D: {
        // top: -50,
        // width: 1000,
        // height: 800,
        viewControl: {
          // projection: 'orthographic'
        },
        axisLine: {
          lineStyle: {
            width: 5
          }
        },
        axisTick: {
          lineStyle: {
            width: 3
          }
        },
        splitLine: {
          lineStyle: {
            width: 1
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(0,0,0,0.2)','rgba(50,50,50,0.2)']
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 14
          }
        }
      },
      series: [{
        type: 'bar3D',
        data: [
          [0, 0, 30], [1, 2, 15], [1,3, 20], [3, 15, 12], [3, 10, 14]
        ]
      }]
    };

    return (
      <ReactEcharts
        style={{height: '100%', width: '100%'}}
        option={option}/>
    )
  }
}

export default Index;