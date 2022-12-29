import React from 'react'
import './Card.css'

export default function Card({ cardItem }) {
    console.log(cardItem);
    return (

        <div className='card-container'>
            <div className='card-image'>
                <img src={cardItem.image} style={{ height: "100px", width: "120px" }} />
            </div>
            <div className='card-price'>
                $ {cardItem.price}
            </div>

        </div>

    )
}
