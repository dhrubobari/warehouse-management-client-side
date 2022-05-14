import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${itemId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    return (
        <div>
        <h3 className='mt-5 text-info'>Your TV Details</h3>
            <div className='details'>
            <p>Model: {item.name}</p>
            <p>price: {item.price}</p>
            <p>quantity: {item.quantity}</p>
            <p>supplied by: {item.supplier}</p>
            </div>
        <div>
        <Form.Control size="sm" type="text" placeholder='restock the items' className='mt-5 w-25 mx-auto' />    
        <div className='d-inline'>
        <input type="number" className='mt-5' placeholder='add quantity' />
        <button>Add</button>
        </div>
        </div>    
        <Button variant="outline-warning" className='mt-5'>Deliver</Button>
        </div>
    );
};

export default Inventory;