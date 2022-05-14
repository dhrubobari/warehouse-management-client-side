import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setItems(data))
    })

    return (
        <div className='container mt-5'>
        <div>
        <h1>Here is our best TV</h1>
        </div>
        <div className='items-container mt-5'>
            {
                items.map(item => <Item
                    key={item._id}
                    item={item} 
                ></Item>)
            }
        </div>
     </div>
    );
};

export default Items;