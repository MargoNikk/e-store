import React from "react";

import icon from './bag.svg'
import './cart-link.css';

const CartLink = ({ total, amount }) => {
    return (
        <div className="cart-link">
            <div className="icon-box">
                <img className="icon" src={icon} alt="Cart" />
                { amount > 0 && <span className="amount">{amount}</span> }
            </div>
            <span className="title">CART</span>
            { total > 0 && <span className="total text-muted">(${total})</span> }
        </div>
    );
};

export default CartLink;