import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../components';

const CartList = () => {
    const { cart } = useSelector((state) => state.cart);
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <section className='flex flex-col'>
            {cart.map((product) => (
                <CartItem key={product._id} product={product} />
            ))}
            <div className='flex justify-end font-bold'>
                Сумма заказа: <span className='pl-2'> {totalPrice}</span>
            </div>
        </section>
    );
};

export default React.memo(CartList);
