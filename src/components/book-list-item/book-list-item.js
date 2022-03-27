import React from "react";
import { addItem } from '../../reducers/shopping-cart';
import { useDispatch } from "react-redux";

import './book-list-item.css'

const BookListItem = ({ book }) => {
    const { title, author, price, imgUrl } = book;
    const dispatch = useDispatch();

    const onAddToCart = (book) => {
        dispatch(addItem(book));
    };

    return (
        <div className="book-item">
            <img className="image" src={imgUrl} alt={title} />
            <div className="info">
                <div>
                    <h5>{title}</h5>
                    <p>{author}</p>
                    <p className='price'>${price}</p>
                </div>
                <button type="button"
                    className="btn btn-primary"
                    onClick={() => onAddToCart(book)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default BookListItem;