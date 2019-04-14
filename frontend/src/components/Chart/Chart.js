import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Line } from 'react-chartjs-2';

// class Chart extends Component{
//     state = {
//         data: []
//     };

//     // async componentDidMount() {
//     //     try {
//     //       const res = await fetch('http://127.0.0.1:8000/api/bandwidth');
//     //       const data = await res.json();
//     //       this.setState({
//     //         data
//     //       });
//     //     } catch (e) {
//     //       console.log(e);
//     //     }
//     //   }  
      
//       render(){
//         // const {data} = this.state;
//           return(
//             <>
//               {this.state.data.map(datum => (
//                   console.log(datum)
//               ))}
//             </>
//           )
//       }


// };


const Chart = ({data}) => {
    console.log('chart.js',data)

    // const bytes_ts = Array.from(data.map(element => element.bytes_ts));
    

    
    const bytes_ts  = Array.from(data.map(datum => datum.map(ele => {return ele.bytes_ts})))

    const len_data = data.map(ele => {return ele.length});
    

    const bytes_fs  = (data.map(datum => datum.map(ele => {return ele.bytes_fs})))    

    console.log('bytes_ts',bytes_fs)

    const num_data = [...Array(len_data[0]).keys()]


    console.log('num_data',num_data);

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
        <Line data={chart_data} options={options} />
        // <Aux>
        //     {data.map(element => { 
        //         return(
        //             <>
        //             <p>bytes_ts{element.bytes_ts}</p>
        //             <p>bytes_fs{element.bytes_fs}</p>
        //             </>
        //         )
        //     })}
        // </Aux> 
    )
};

export default Chart;