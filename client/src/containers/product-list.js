import React, { useEffect } from 'react';
import { ProductItem } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/product-actions';
import { addProductToCart } from '../store/actions/cart-actions';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const addToCartHandler = (product) => {
        dispatch(addProductToCart(product));
    };

    if (loading) {
        return <div>Loading</div>;
    }
    return (
        <section className='flex flex-wrap flex-col md:flex-row items-center'>
            {products.map((product) => (
                <ProductItem
                    key={product._id}
                    product={product}
                    addToCartHandler={addToCartHandler}
                />
            ))}
        </section>
    );
};

export default ProductList;
