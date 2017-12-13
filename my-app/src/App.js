import React, { Component } from 'react';
import Body from './subPages/Body';
import Head from './subPages/Head';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Sami'
        }
    }

    appFunction(newName){
        this.setState({
            name: newName
        });
    }

    render() {
      var people = {
          name: 'Younes',
          hobbies: ['sport', 'guitar']
      }

    return (
      <div className="App">
          <Head/>
          <Body myList={people} initialName={'Max'} myFun={this.appFunction.bind(this)}>This is a paragraph</Body>
          <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
