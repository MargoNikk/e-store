import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Your cart is empty!</h4>
                <p className="card-text">Go back to the catalog and add something to the cart to see the total amount of the purchase here.</p>
                <Link className="card-link" to="/">Continue shopping</Link>
            </div>
        </div>
    );
}

export default EmptyCart;