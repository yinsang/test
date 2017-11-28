import React, {Component}from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import App from './App';
import About from './components/About'

export default class Routes extends Component{
    render() {
        return (
                <BrowserRouter>
                    <div>
                    <ul>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/App">App</Link></li>
                    </ul>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                        <Route path='/App' component={App} />
                        <Route path='/About' component={About} />
                    </div>
                </BrowserRouter>
        )
    }
} ;