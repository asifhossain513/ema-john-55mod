import React from 'react';
import './ReviewItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({ product,handleRemoveFromCart }) => {
    const { img, name, price, shipping, id } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <div className='review-details'>
                    <h2>{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                </div>
                <button className='btn-delete' onClick={()=>handleRemoveFromCart(id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

                </button>
            </div>
        </div>
    );
};

export default ReviewItem;