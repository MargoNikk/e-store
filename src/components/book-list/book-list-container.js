import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withBookstoreService } from '../hoc';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';
import BookList from './book-list';
import { selectAllBooks, fetchBooks } from '../../reducers/book-list';

const BookListContainer = ({ bookstoreService }) => {
    const dispatch = useDispatch();
    const books = useSelector(selectAllBooks);
    const loading = useSelector(state => state.bookList.loading);
    const error = useSelector(state => state.bookList.error);

    useEffect(() => {
        dispatch(fetchBooks(bookstoreService));
    }, []);

    let content;

    if (loading) {
        content = <Spiner />;
    }

    if (error) {
        content = <ErrorIndicator value={"Books didn't load!"} />;
    }

    if (!loading && !error && books) {
        content = <BookList books={books} />;
    }

    return content;
};

export default withBookstoreService()(BookListContainer);
