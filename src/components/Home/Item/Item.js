import React from 'react';
import './Item.css'

const Item = ({item}) => {

    const {img, name, price, quantity, supplier, description} = item;

    return (
        <div className='items'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <p><small>Supplied by: {supplier}</small></p>
            <p><small>Quantity: {quantity}</small></p>
            <button className='btn btn-primary w-50'>Update</button>  
        </div>
    );
};

export default Item;