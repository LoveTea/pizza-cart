import { combineReducers } from 'redux';
import cartReducer from './reducers/cart-reducer';
import productReducer from './reducers/product-reducer';

export default combineReducers({
    products: productReducer,
    cart: cartReducer,
});
