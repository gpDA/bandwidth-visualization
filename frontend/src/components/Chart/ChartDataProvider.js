import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Spinner from '../Spinner/Spinner';
import Chart from './Chart';
import Select from 'react-select';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import {Container, Row, Col} from 'react-bootstrap';

class ChartDataProvider extends Component {
    state = {
        data: [],
        filteredData: [],
        loaded: false,
        selectedOption: null,
    }    
    async componentDidMount() {
        try {
          const res = await fetch("http://127.0.0.1:8000/api/bandwidth");
          const data = await res.json();

        
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

        const distict_data = Array.from(new Set(data.map(datum => datum.device_id)))

        const options = distict_data.map(datum => {
            return {'label': datum, 'value': datum}
        })
        
        const time_format = 'h:mm a';

        const now = moment();
        // console.log(now);
        

        return(
            <Aux>
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row mt-3">
                    <label className="col-2 col-form-label">device_uuid</label>
                    <div class="col-10">
                    <Select
                        options = {options}
                    />
                    </div>
                </div> 
                <div className="form-group row">
                    <label className="col-2 col-form-label">end time</label>
                    <div class="col-10">
                    <TimePicker
                        className="form-control"
                        showSecond={false}
                        defaultValue={now}
                        name="end_time"
                        format={time_format}
                    />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-2 col-form-label">window time</label>                    
                    <div class="col-10">
                    <input
                        className="form-control"
                        type="number"
                        name="window_time"
                        defaultValue={60}
                        placeholder="type end_time default (60)"                
                    />
                    </div>                
                </div>
                <div className="form-group row">
                    <label className="col-2 col-form-label">number of windows</label>                    
                    <div class="col-10">
                    <input
                        className="form-control"
                        type="number"
                        name="num_windows"
                        defaultValue={10}
                        placeholder="type number of window default (10)"                
                    />
                    </div>                
                </div>                              
                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
            </div>
            

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