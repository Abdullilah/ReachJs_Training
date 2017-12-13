import React, { Component } from 'react';

class Head extends Component {
    render() {
        return (
            <div className="Head">
                <nav>
                    <ul className='nav-list'>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>About</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Head;
