import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${itemId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    })

    return (
        <div>
        <h3 className='mt-5 text-info'>TV Details</h3>
            <div className='details'>
            <p>Model: {item.name}</p>
            <p>quantity: <span id="manage-quantity">0</span></p>
            <p>supplied by: {item.supplier}</p>
            </div>
        <div>
        <Form.Control size="sm" type="text" placeholder='restock the items' className='mt-5 w-25 mx-auto' />    
        <div className='d-inline'>
        <input type="number" className='mt-5' placeholder='add quantity' />
        <button id="add-quantity">Add</button>
        <button className='m-3 btn btn-warning'>Deliver</button>
        </div>
        </div>
        <Link to={'/manageinventory'}>
        <button type="button" class="mt-5 btn btn-success">Manage Inventories</button> 
        </Link>
        </div>
    );
};

export default Inventory;