import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    })

    return (
        <div className='container mt-5'>
        <div>
        <h1 className='title'>Here is our best TV</h1>
        </div>
        <div className='items-container'>
            {
                items.map(item => <Item
                    key={item.id}
                    item={item} 
                ></Item>)
            }
        </div>
     </div>
    );
};

export default Items;