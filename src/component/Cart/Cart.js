import React from 'react';

const Cart = () => {
    return (
        <div className='text-center'>
            <h2 className='fw-bold'>Select Movie</h2>
            <button className='btn btn-danger fw-bold mb-2'>Choose 1 for me</button>
            <br />
            <button className='btn btn-success fw-bold'>Reset </button>
        </div>
    );
};

export default Cart;