import React from 'react';
import Home from '../modules/Home';
import Login from '../modules/Login/index.jsx';
import Register from '../modules/Register/index.jsx';
import Products from '../modules/Products';
import ProductDetail from '../modules/ProductDetail';
import Cart from '../modules/Cart';
import Checkout from '../modules/Checkout';
import Notfound404 from '../modules/Notfound404';

const routes = [{
    path: '/',
    exact: true,
    main: () => < Home />
}, {
    path: '/login',
    exact: true,
    main: () => < Login />
}, {
    path: '/register',
    exact: false,
    main: () => < Register />
}, {
    path: '/category/:slug/:id',
    exact: true,
    main: () => < Products />
}, {
    path: '/product/:slug/:id',
    exact: true,
    main: (props) => < ProductDetail {...props}/>
}, {
    path: '/cart',
    exact: true,
    main: () => < Cart />
}, {
    path: '/Checkout',
    exact: true,
    main: () => < Checkout />
}, {
    main: () => < Notfound404 />
}
]

export default routes;