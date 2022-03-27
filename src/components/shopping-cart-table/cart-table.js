import React from "react";
import CartTableRow from './cart-table-row';

const CartTable = ({ items, total }) => {
    const rowItems = items.map((item, idx) =>
        <CartTableRow item={item} idx={idx} />
    );

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Count</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {rowItems}
                <tr className="table-dark">
                    <td colSpan={4} className="total">Total:</td>
                    <td>${total}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default CartTable;