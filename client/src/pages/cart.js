import React from 'react';
import CartList from '../containers/cart-list';

const Cart = () => {
    return (
        <>
            <h1 className='my-4 font-bold text-2xl'>Корзина</h1>
            <CartList />
        </>
    );
};

export default Cart;
