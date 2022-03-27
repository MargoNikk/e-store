import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import CartLink from '../cart-link';

import './header.css';

const Header = () => {
    const total = useSelector(state => state.cart.orderTotal);
    const count = useSelector(state => state.cart.orderCount);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand"> E-Store</Link>
                <Link to="cart" className="cart">
                    <CartLink total={total} amount={count} />
                </Link>
            </div>
        </nav>
    );
};

export default Header;