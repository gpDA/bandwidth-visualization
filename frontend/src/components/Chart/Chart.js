import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';

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
    console.log(data)
    return (
        <Aux>
            {data.map(element => { 
                return(
                    <>
                    <p>bytes_ts{element.bytes_ts}</p>
                    <p>bytes_fs{element.bytes_fs}</p>
                    </>
                )
            })}
        </Aux> 
    )
};

export default Chart;