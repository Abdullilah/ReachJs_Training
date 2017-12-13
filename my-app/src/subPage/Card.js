import React, { Component } from 'react';

class Card extends Component {
    finalPayment () {
        var totPrice = document.querySelector('.App .Card .totalPrice').textContent;
        alert('The Total Payment Is: ' + totPrice);
    }

    render() {

        return (
            <div className='Card'>
                <h1>My Card</h1>
                <div className='cardsList'>
                </div>
                <div className='priceInfo'>
                    <p>Total Price: <span className='totalPrice'>0$</span></p>
                    <button onClick={this.finalPayment}>Buy Now</button>
                </div>
            </div>
        );
    }
}

export default Card;
