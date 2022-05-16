import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {

    const {_id, img, name, price, quantity, supplier, description} = item;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='items'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <p><small>Supplied by: {supplier}</small></p>
            <p><small>Quantity: {quantity}</small></p>
            <button className='btn btn-primary w-50' onClick={() => navigateToInventory(_id)}>Update</button>  
        </div>
    );
};

export default Item;