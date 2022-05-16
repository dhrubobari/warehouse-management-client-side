import React, { useEffect, useState } from 'react';
import ManageInventory from "../ManageInventory/ManageInventory";

const AllItems = () => {

    const [allItems, setallItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageinventory')
        .then(res => res.json())
        .then(data => setallItems(data))
    }, [])

    return (
        <div>
            <h3>Manage Inventories</h3>
            {
                allItems.map(allItem => 
                <ManageInventory 
                key={allItem._id} 
                allItem={allItem}
                ></ManageInventory>)
            }
        </div>
    );
};

export default AllItems;