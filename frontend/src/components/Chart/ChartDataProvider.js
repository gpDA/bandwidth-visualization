import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import PropTypes from "prop-types";
import Spinner from '../Spinner/Spinner';
import Chart from './Chart';

class ChartDataProvider extends Component {
    state = {
        data: [],
        filteredData: [],
        loaded: false,
    }    
    async componentDidMount() {
        try {
          const res = await fetch("http://127.0.0.1:8000/api/bandwidth");
          const data = await res.json();
        //   console.log(data);
        // data = data.filter(datum => {

        // })

        
          this.setState({
            data : data,
            filteredData: data.filter(datum => {
                return datum.device_id == 'cf4844bc-a107-4e0a-84e1-fa04d76d388c'
            }),
            loaded: true
          });
        } catch (e) {
            console.log(e);
        }
      }       
    render(){
        const { data, loaded, filteredData} = this.state;
        return(
            <Aux>
            {loaded ? 
                (<Chart data={filteredData} />)
            :
                (<Spinner/>)
            }
            </Aux>
        );        
    }
}

export default ChartDataProvider;