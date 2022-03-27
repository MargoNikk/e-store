import React from "react";
import { useSelector } from "react-redux";
import { selectAllCartItems } from '../../reducers/shopping-cart';
import EmptyCart from './empty-cart';
import CartTable from './cart-table';

import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    const items = useSelector(selectAllCartItems);
    const total = useSelector(state => state.cart.orderTotal);

    return (
        <div className="shopping-cart-table">
            <h3>Your order information</h3>

            { items.length ? <CartTable items={items} total={total} /> : <EmptyCart /> }
        </div>
    );
};

export default ShoppingCartTable;