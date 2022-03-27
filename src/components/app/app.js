import React, { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';

import Header from '../header';
import { HomePage } from '../pages';
import Spiner from '../spiner';

const CartPage = lazy(() => import('../pages/cart-page'));

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Suspense fallback={<Spiner />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="cart" element={<CartPage />} />
                    </Routes>
                </Suspense>
            </div>
        </>
    );
};

export default App;