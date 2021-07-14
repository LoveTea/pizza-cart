import {
    ADD_PRODUCT_TO_CART,
    CHANGE_PRODUCT_QUANTITY,
    DELETE_PRODUCT_FROM_CART,
} from '../action-types/cart-types';

export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product,
    };
};

export const changeProductQuantity = (id, value) => {
    return {
        type: CHANGE_PRODUCT_QUANTITY,
        payload: [id, value],
    };
};

export const deleteProductFromCart = (id) => {
    return {
        type: DELETE_PRODUCT_FROM_CART,
        payload: id,
    };
};
