import React, { Component } from 'react';

class Item extends Component {
    findAncestor (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }

    reCalculate(){
        var allCards = document.querySelectorAll('.cardsList .card .price');
        if(allCards && allCards.length >0){
            document.querySelector('.App .Card .priceInfo').style.display = 'block';
            var totalPrice = 0;
            for(var i = 0; i < allCards.length; i++){
                totalPrice += parseFloat(allCards[i].textContent);
            }
            document.querySelector('.App .Card .totalPrice').textContent = totalPrice + '$';
        }

    }

    addToCard(e) {
        var cardClicked = this.findAncestor(e.target, 'card');
        var newEle = cardClicked.cloneNode(true);
        newEle.querySelector('.remove').addEventListener('click', function () {
            newEle.parentNode.removeChild(newEle);
            var allCards = document.querySelectorAll('.cardsList .card .price');
            if(allCards && allCards.length >0){
                document.querySelector('.App .Card .priceInfo').style.display = 'block';
                var totalPrice = 0;
                for(var i = 0; i < allCards.length; i++){
                    totalPrice += parseFloat(allCards[i].textContent);
                }
                document.querySelector('.App .Card .totalPrice').textContent = totalPrice + '$';
            } else{
                document.querySelector('.App .Card .priceInfo').style.display = 'none';
            }
        })
        document.querySelector('.cardsList').appendChild(newEle);
        this.reCalculate();
    }

    render() {
        return (
            <div className='card'>
                <h3>{this.props.newItem.title}</h3>
                <img src={this.props.newItem.src}/>
                <p>{this.props.newItem.desc} <span className='price'>{this.props.newItem.price}</span></p>
                <button onClick={(e) => this.addToCard(e)} className='add'>Add to Card</button>
                <button className='remove'>Remove From Card</button>
            </div>
        )
    }
}

export default Item;
