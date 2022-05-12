import React from 'react';
import './Item.css'

const Item = ({item}) => {

    const {img, name, price, quantity, supplier} = item;

    return (
        <div className='items'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{supplier}</small></p>
            <p><small>{quantity}</small></p>
        </div>
    );
};

export default Item;