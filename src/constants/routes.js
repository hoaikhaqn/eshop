import React from 'react';

import Home from '../modules/Home';
import Login from '../modules/Login/index.jsx';
import Register from '../modules/Register/index.jsx';
import Products from '../modules/Products';
import ProductDetail from '../modules/ProductDetail';
import Cart from '../modules/Cart';
import Checkout from '../modules/Checkout';
import Notfound404 from '../modules/Notfound404';

// Admin
import AdminDashboard from '../modules/Admin/modules/Dashboard';
import AdminProducts from '../modules/Admin/modules/Products';

export const RoutesAmin = [{
    path: '/admin',
    exact: true,
    defaultLayout:true,
    main: (props) => < AdminDashboard  {...props} />
},{
    path: '/admin/products',
    exact: true,
    defaultLayout:true,
    main: (props) => < AdminProducts  {...props} />
}]

export const RoutesUser = [{
    path: '/',
    exact: true,
    main: (props) => < Home  {...props} />
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
    main: (props) => < Products {...props} />
}, {
    path: '/search/:keyword?',
    exact: true,
    main: (props) => < Products {...props} />
}, {
    path: '/products/:special?',
    exact: true,
    main: (props) => < Products {...props} />
}, {
    path: '/product/:slug/:id',
    exact: true,
    main: (props) => < ProductDetail {...props} />
}, {
    path: '/cart',
    exact: true,
    main: () => < Cart />
}, {
    path: '/checkout',
    exact: true,
    main: () => < Checkout />
}, {
    main: () => < Notfound404 />
}]