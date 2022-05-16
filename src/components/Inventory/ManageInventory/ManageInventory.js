import React from 'react';

const ManageInventory = ({allItem}) => {

    const {name, price, supplier} = allItem;

    return (
        <div className='mt-5'>
            <div>
            <div className='border border-secondary rounded w-50 mb-5 mx-auto'>
            <p>Name: {name} - Price: {price} - Contributed by: {supplier}</p>
            </div>
            <button className='btn btn-warning text-white m-1'><small>remove</small></button>
            <button className='btn btn-warning text-white m-1'><small>add new item</small></button>
            </div>
        </div>
    );
};

export default ManageInventory;