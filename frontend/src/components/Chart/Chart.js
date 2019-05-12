import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


const Chart = ({data}) => {
    // data ==> filteredData
    // console.log('chart.js ?',data)
    
    // get bytes_ts
    const bytes_ts  = Array.from(data.map(datum => datum.map(ele => {return ele.bytes_ts})))

    // get the length of data...
    const len_data = data.map(ele => {return ele.length});

    // get bytes_fs
    const bytes_fs  = (data.map(datum => datum.map(ele => {return ele.bytes_fs})))    

    // PRINT
    // console.log('bytes_ts',bytes_fs)

    // to populate x axes
    const num_data = [...Array(len_data[0]).keys()]

    const chart_data = {
        labels: num_data,
        datasets: [{
            label: "bytes_ts",
            lineTension: 0.1,
            fill: false,
            pointHoverBackgroundColor: "yellow", 
            borderColor: "purple",
            pointRadius: 4,
            pointHitRadius: 10,                       
            data: bytes_ts[0],
            
        },{
        label: "bytes_fs",
        lineTension: 0.1,
        fill: false,
        pointHoverBackgroundColor: "brown",  
        borderColor: "green",
        pointRadius: 4,
        pointHitRadius: 10,              
        data: bytes_fs[0]        
    }

    ]

    }

    const options = {
        title: {
            display: true,
            text: 'chart.js line Chart'
        }
    }
    return (
        // chartjs {Line} data && options
        <Line data={chart_data} options={options} />
    )
};

export default Chart;