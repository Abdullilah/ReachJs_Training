import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
            <div className="Body">
                <h1>Hello from Body</h1>
                <ul>{this.props.myList.hobbies.map((hobbie, index) => <li key={index}>{hobbie}</li>)}</ul>
            </div>
        );
    }
}

export default Body;
