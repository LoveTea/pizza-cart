import {
    ADD_PRODUCT_TO_CART,
    CHANGE_PRODUCT_QUANTITY,
    DELETE_PRODUCT_FROM_CART,
} from '../action-types/cart-types';

const initialState = {
    cart: [],
    loading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            const productExist = state.cart.find(
                (product) => product._id === action.payload._id
            );

            if (productExist) {
                const newState = state.cart.map((product) =>
                    product._id === action.payload._id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
                return {
                    ...state,
                    cart: newState,
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
        }

        case CHANGE_PRODUCT_QUANTITY: {
            const [id, value] = action.payload;
            const newState = state.cart.map((product) => {
                return product._id === id
                    ? {
                          ...product,
                          quantity: product.quantity + value,
                      }
                    : product;
            });

            return {
                ...state,
                cart: newState,
            };
        }

        case DELETE_PRODUCT_FROM_CART: {
            const id = action.payload;

            const newState = state.cart.filter((product) => product._id !== id);

            return {
                ...state,
                cart: newState,
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
