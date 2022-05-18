import React from 'react';

const AddItem = () => {

    //

    return (
        <div className='w-50 mx-auto border border-dark p-5 mt-5'>
            <h2>You Can Add Any Random Item</h2>
            <form className='d-flex flex-column'>
                <input className='mt-5 p-2' type="text" placeholder='Item Name' />
                <input className='mt-5 p-1' type="text" placeholder='Item Image URL' />
                <button type="button" class="btn btn-success btn-sm mt-5">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;