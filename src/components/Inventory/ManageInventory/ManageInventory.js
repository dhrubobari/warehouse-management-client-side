import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {

    const [allItems, setallItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageinventory')
        .then(res => res.json())
        .then(data => setallItems(data))
    }, [])

    // 
    const removeItem = id => {
        const url = 'http://localhost:5000/manageinventory';
        fetch(url, {
            method: 'Delete'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const leftItem = allItems.filter(allItem => allItem._id !== id);
            setallItems(leftItem);
        })
    }

    return (
        <div>
            <h3>Manage Inventories</h3>
            {
                allItems.map(allItem => <div className='mt-5 '>
                <div className='border border-secondary rounded w-50 mb-5 mx-auto' 
                key={allItem._id}>
                <p>Name: {allItem.name} - Price: {allItem.price} - Contributed by: {allItem.supplier}</p>
                </div>
                <div>
                <button className='btn btn-warning text-white m-1' onClick={() => removeItem(allItem._id)}><small>remove</small></button>
                <Link to={'/addinventory'}>
                <button className='btn btn-info text-white m-1'><small>add item</small></button>
                </Link>
                </div>
                </div>)
            }
        </div>
    );
};

export default ManageInventory;