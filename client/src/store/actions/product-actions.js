import axios from 'axios';
import {
    FETCH_PRODUCT_FAIL,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
} from '../action-types/product-types';

export const fetchProducts = () => (dispatch) => {
    dispatch({
        type: FETCH_PRODUCT_REQUEST,
    });
    axios
        .get('http://localhost:5000/api/v1/products')
        .then((products) =>
            dispatch({
                type: FETCH_PRODUCT_SUCCESS,
                payload: products.data.data,
            })
        )
        .catch(() => {
            dispatch({
                type: FETCH_PRODUCT_FAIL,
                payload: 'Ошибка при получении продуктов',
            });
        });
};
