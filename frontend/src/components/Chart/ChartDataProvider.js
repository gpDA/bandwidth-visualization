import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import PropTypes from "prop-types";
import Spinner from '../Spinner/Spinner';
import Chart from './Chart';

class ChartDataProvider extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    }
    state = {
        data: [],
        loaded: false,
    }    
    async componentDidMount() {
        try {
          const res = await fetch("http://127.0.0.1:8000/api/bandwidth");
          console.log(res);
          const data = await res.json();
          this.setState({
            data,
            loaded: true
          });
        } catch (e) {
            console.log(e);
        }
      }       
    render(){
        const { data, loaded} = this.state;
        // console.log('data',data)
        return(
            <Aux>
            {loaded ? 
                (<Chart data={data} />)
            :
                (<Spinner/>)
            }
            </Aux>
        );        
    }
}

export default ChartDataProvider;