import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../src/subPage/Home';
import About from '../src/subPage/About';
import Card from './subPage/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
                <nav>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                  </ul>
                </nav>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
          </Router>

          <Card/>
      </div>
    );
  }
}

export default App;


