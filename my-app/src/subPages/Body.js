import React, { Component } from 'react';

class Body extends Component {
    constructor(props){
        super();
        this.state = {
            name: props.initialName
        }
    }

    btnClicked(){
        this.setState({
            name: this.state.name + ' Abdoo'
        });
    }

    booob(){
        this.props.myFun(this.state.name)
    }

    render() {
        return (
            <div className="Body">
                <h1>Hello from Body</h1>
                <ul>{this.props.myList.hobbies.map((hobbie, index) => <li key={index}>{hobbie}</li>)}</ul>
                <p>{this.props.schildren}</p>
                <p>{this.state.name}</p>
                <button onClick={this.btnClicked.bind(this)}>Change the name</button><br /><br />
                <button onClick={this.booob.bind(this)}>Run Function</button>
            </div>
        );
    }
}

export default Body;
