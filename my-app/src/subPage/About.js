import React, { Component } from 'react';
import Item from './Item';

class About extends Component {
    render() {
        const myData = [
            {
                'id': '6',
                'title': 'The First Element',
                'src': 'https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/26831/c5bb5002-6506-42fd-aa5f-08f517f6cbdb.png',
                'desc': 'This element has price',
                'price' : '5$'
            },
            {
                'id': '7',
                'title': 'The Second Element',
                'src': 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png',
                'desc': 'This element has price',
                'price' : '52$'
            },
            {
                'id': '8',
                'title': 'The Third Element',
                'src': 'http://www.mappingwords.com/wp-content/uploads/2017/07/sarah.png',
                'desc': 'This element has price',
                'price' : '42$'
            }
        ];

        return (
            <div className="About">
                <h1>Human Resources Section</h1>
                <div>
                    <ul>
                        {myData.map(function(data, index){
                            return <Item newItem={data} key={index}/>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;


