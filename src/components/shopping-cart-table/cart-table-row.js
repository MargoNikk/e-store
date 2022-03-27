import React from "react";
import { useDispatch } from "react-redux";
import {
    deleteItem,
    increaseCount,
    decreaseCount
} from '../../reducers/shopping-cart';

const CartTableRow = ({ item, idx }) => {
    const dispatch = useDispatch();

    const { id, title, count, price } = item;

    return (
        <tr className="table-secondary" key={idx}>
            <td>{idx + 1}</td>
            <td>{title}</td>
            <td className="count">
                <button type="button"
                    className="btn"
                    onClick={() => dispatch(decreaseCount(id))}>
                    <i className="bi bi-dash-circle"></i>
                </button>
                <span>{count}</span>
                <button type="button"
                    className="btn"
                    onClick={() => dispatch(increaseCount(id))}>
                    <i className="bi bi-plus-circle"></i>
                </button>
            </td>
            <td>${price}</td>
            <td className="action">
                <button type="button"
                    className="btn btn-outline-danger"
                    onClick={() => dispatch(deleteItem(id))}>
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
};

export default CartTableRow;