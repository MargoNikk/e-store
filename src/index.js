import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import BookstoreService from './services/bookstore-service';
import App from "./components/app";
import ErrorBoundry from './components/error-boundry';
import { BookstoreProvider } from './components/bookstore-service-context'

import store from './store';

const bookstoreService = new BookstoreService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);