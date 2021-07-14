import React, { useEffect } from 'react';
import Counter from '../counter/counter';
import { useDispatch } from 'react-redux';
import {
    changeProductQuantity,
    deleteProductFromCart,
} from '../../store/actions/cart-actions';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();

    const changeProductQuantityHandler = (id, value) => {
        dispatch(changeProductQuantity(id, value));
    };

    useEffect(() => {
        if (product.quantity <= 0) {
            dispatch(deleteProductFromCart(product._id));
        }
    }, [product, dispatch]);

    return (
        <article className='flex items-center justify-between'>
            <img
                className='w-24'
                src={product.imageURL}
                alt='Изображение товара'
            />
            <h3 className='w-64'>{product.title}</h3>
            <Counter
                value={product.quantity}
                valueChange={changeProductQuantityHandler.bind(
                    null,
                    product._id
                )}
            />
            <div className='font-bold w-24'>
                {product.price * product.quantity} ₽
            </div>
        </article>
    );
};

export default React.memo(CartItem);
