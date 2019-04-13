// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Spinner from '../Spinner/Spinner';
// import Chart from '../Chart/Chart';
// import Aux from '../../hoc/Aux/Aux';

// class DataProvider extends Component{
//     static propTypes = {
//         endpoint: PropTypes.string.isRequired
//     }
//     state = {
//         data: [],
//         loaded: false,
//     }
    
//     // componentDidMount(){
//     //     fetch(this.props.endpoint)
//     //     // print(this)
//     //     console.log(this.props.endpoint)
//     //     .then(response => {
//     //         if (response.status !== 200){
//     //             returns;
//     //         }
//     //         return response.json();
//     //     })
//     //     .then(data => this.setState({data: data, loaded: true}));
//     // };
//     async componentDidMount() {
//         try {
//           const res = await fetch(this.props.endpoint);
//           const data = await res.json();
//           this.setState({
//             data,
//             loaded: true
//           });
//         } catch (e) {
//             console.log(e);
//         }
//       }    

//     render(){
//         const { data, loaded} = this.state;

//         console.log('data',data)
//         return(
//             <Aux>
//             {loaded ? 
//                 (<Chart data={data} />)
//             :
//                 (<Spinner/>)
//             }
//             </Aux>
//         );
//     }
// }

// export default DataProvider;