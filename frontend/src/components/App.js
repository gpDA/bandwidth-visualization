import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Chart from './Chart/Chart';
import ChartDataProvider from './Chart/ChartDataProvider';


class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ChartDataProvider} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;