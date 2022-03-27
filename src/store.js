import { configureStore } from '@reduxjs/toolkit';
import bookListReducer from './reducers/book-list';
import shoppingCartReducer from './reducers/shopping-cart';

const logMiddleware = () => (next) => (action) => {
    console.log('It`s a ' + action.type);
    return next(action);
};

export default configureStore({
    reducer: {
        bookList: bookListReducer,
        cart: shoppingCartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware),
});