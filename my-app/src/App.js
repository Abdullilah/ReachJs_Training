import React, { Component } from 'react';
import Body from './subPages/Body';
import Head from './subPages/Head';
import './App.css';

class App extends Component {
  render() {
    var people = {
        name: 'Younes',
        hobbies: ['sport', 'guitar']
    }
    return (
      <div className="App">
        <Head/>
        <Body myList={people}/>
      </div>
    );
  }
}

export default App;
