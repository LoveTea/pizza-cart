import React from 'react';
import { Button } from '../index';

const ProductItem = ({ product, addToCartHandler }) => {
    return (
        <article className='w-64 md:w-1/3 p-3'>
            <main>
                <img
                    className='mx-auto'
                    src={product.imageURL}
                    alt='Изображение товара'
                />
                <h3 className='font-bold mb-2'>{product.title}</h3>
                <p className='mb-4 text-sm text-gray-700'>
                    {product.description}
                </p>
            </main>
            <footer className='flex justify-between items-center'>
                <div className='font-medium'>от {product.price} ₽</div>
                <Button
                    className='bg-blue-500 text-white px-4 py-2 rounded'
                    onClick={() => addToCartHandler(product)}
                >
                    В корзину
                </Button>
            </footer>
        </article>
    );
};

export default ProductItem;
