import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
    render() {
        const myData = [
            {
                'id': '1',
                'title': 'The First Element',
                'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Creative-Tail-People-women.svg/200px-Creative-Tail-People-women.svg.png',
                'desc': 'This element has price',
                'price' : '5$'
            },
            {
                'id': '2',
                'title': 'The Second Element',
                'src': 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Rilley_elf_south_park_avatar.png',
                'desc': 'This element has price',
                'price' : '52$'
            },
            {
                'id': '3',
                'title': 'The Third Element',
                'src': 'https://i.pinimg.com/236x/6f/94/ef/6f94ef3a4fd2fbcf65de103695da775c--avatar.jpg',
                'desc': 'This element has price',
                'price' : '42$'
            },
            {
                'id': '4',
                'title': 'The Fourth Element',
                'src': 'http://i0.kym-cdn.com/photos/images/facebook/000/001/007/Awesome_Smiley___Old_Snake_by_Sitic.png',
                'desc': 'This element has price',
                'price' : '520$'
            },
            {
                'id': '5',
                'title': 'The Fifth Element',
                'src': 'http://i.imgur.com/cUOPN6R.png',
                'desc': 'This element has price',
                'price' : '32$'
            }
        ];

        return (
            <div className="Home">
                <h1>Developer Section</h1>
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

export default Home;


