import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter();

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: cartAdapter.getInitialState({
        orderTotal: 0,
        orderCount: 0
    }),
    reducers: {
        addItem: (state, action) => {
            let cartItem = state.entities[action.payload.id];

            if (!cartItem) {
                cartItem = {
                    ...action.payload,
                    count: 1
                };
            } else {
                cartItem.count += 1;
            }

            cartAdapter.upsertOne(state, cartItem);
            state.orderTotal += cartItem.price;
            state.orderCount += 1;
        },
        deleteItem: (state, action) => {
            const bookId = action.payload;
            const exsitingItem = state.entities[bookId];

            state.orderTotal -= exsitingItem.price * exsitingItem.count;
            state.orderCount -= exsitingItem.count;
            cartAdapter.removeOne(state, bookId);
        },
        increaseCount: (state, action) => {
            const exsitingItem = state.entities[action.payload];

            exsitingItem.count += 1;
            state.orderTotal += exsitingItem.price;
            state.orderCount += 1;
        },
        decreaseCount: (state, action) => {
            const bookId = action.payload;
            const exsitingItem = state.entities[bookId];

            state.orderTotal -= exsitingItem.price;
            state.orderCount -= 1;

            if (exsitingItem.count > 1) {
                exsitingItem.count -= 1;
            } else {
                cartAdapter.removeOne(state, bookId);
            }
        }
    }
});

export const { addItem, deleteItem, increaseCount, decreaseCount } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

export const {
    selectAll: selectAllCartItems,
    selectById: selectCartItemById,
} = cartAdapter.getSelectors((state) => state.cart);