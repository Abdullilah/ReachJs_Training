import React, { Component } from 'react';

class Head extends Component {
    constructor(props){
        super();
        this.state = {
            name: 'Home'
        }
    }

    changeLinkName(e){
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div className="Head">
                <nav>
                    <ul className='nav-list'>
                        <li><a href=''>{this.state.name}</a></li>
                        <li><a href=''>About</a></li>
                    </ul>
                    <input type='text' value={this.state.name} onChange={this.changeLinkName.bind(this)} />
                </nav>
            </div>
        );
    }
}

export default Head;
