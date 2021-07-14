import React from 'react';
import ProductList from '../containers/product-list';

const Home = () => {
    return (
        <>
            <h1 className='my-4 font-bold text-2xl'>Пицца</h1>
            <ProductList />
        </>
    );
};

export default Home;
