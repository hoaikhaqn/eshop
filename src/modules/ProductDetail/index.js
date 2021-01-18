import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import Breadcrumb from '../Breadcrumb';
import ProductInfo from './components/ProductInfo.js';
import ProductSlider from '../ProductSlider';
import firebase from '../../firebase';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

var object = require('lodash/fp/object');

function ProductDetail(props) {
    const history = useHistory();
    const { auth } = useContext(AuthContext);
    const { cart, setCart } = useContext(CartContext);
    const [category, setCategory] = useState([]);
    const [dataProduct, setDataProduct] = useState(null)
    const [crumb, setCrumb] = useState([])

    useEffect(() => {
        async function fetchData() {
            let idProduct = props.match.params.id;
            let res1 = await firebase.getDocument("products", idProduct)
            if (res1.status) {
                setDataProduct(res1.result)
            }
            let categoryID = res1.result.categoryID;
            let res2 = await firebase.getDocument("category", categoryID)
            if (res2.status == true) {
                setCategory(res2.result)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (category && dataProduct)
            setCrumb([{ link: "/", label: "Home" }, { link: `/category/${category.slug}/${category.id}`, label: category.name }, { label: dataProduct.name }])
    }, [dataProduct, category])

    const CustomToastWithLink = () => (
        <div className="cart-notification">
            <span>Added item to your cart!</span>
            <Link to="/cart">View cart</Link>
        </div>
    );

    const addCartItem = (item) => {
        if (auth.userId) {
            let newCart = { ...cart };
            let dupItem = newCart.products.find(item=>item.id == item.id);
            if(object.isEqual(dupItem,item)){
                console.log("DUPLICATE");
                
            }
            newCart.products.push({
                id:item.id,
                name:item.name,
                
            });
            newCart.totalQuantity++;
            setCart(newCart);
            firebase.addCartItem({ ...newCart })
            toast.dismiss();
            toast.error(CustomToastWithLink);
        } else {
            history.push("/login");
        }
    }

    return (
        <div>
            <Breadcrumb crumbs={crumb} />
            <div className="product-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ProductInfo data={dataProduct || {}} addCartItem={addCartItem} />
                            <div className="related-products">
                                {/* <ProductSlider heading="Related Products" /> */}
                            </div>
                        </div>
                        {/* Side Bar Start */}
                        {/* <div className="col-lg-3 sidebar">
                            <div className="sidebar-widget category">
                                <h2 className="title">Category</h2>
                                <nav className="navbar bg-light">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-female" />Fashion &amp; Beauty</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-child" />Kids &amp; Babies Clothes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-tshirt" />Men &amp; Women Clothes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-mobile-alt" />Gadgets &amp; Accessories</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-microchip" />Electronics &amp; Accessories</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="sidebar-widget brands">
                                <h2 className="title">Our Brands</h2>
                                <ul>
                                    <li><a href="#">Nulla </a><span>(45)</span></li>
                                    <li><a href="#">Curabitur </a><span>(34)</span></li>
                                    <li><a href="#">Nunc </a><span>(67)</span></li>
                                    <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                                    <li><a href="#">Fusce </a><span>(89)</span></li>
                                    <li><a href="#">Sagittis</a><span>(28)</span></li>
                                </ul>
                            </div>
                            <div className="sidebar-widget tag">
                                <h2 className="title">Tags Cloud</h2>
                                <a href="#">Lorem ipsum</a>
                                <a href="#">Vivamus</a>
                                <a href="#">Phasellus</a>
                                <a href="#">pulvinar</a>
                                <a href="#">Curabitur</a>
                                <a href="#">Fusce</a>
                                <a href="#">Sem quis</a>
                                <a href="#">Mollis metus</a>
                                <a href="#">Sit amet</a>
                                <a href="#">Vel posuere</a>
                                <a href="#">orci luctus</a>
                                <a href="#">Nam lorem</a>
                            </div>
                        </div> */}
                        {/* Side Bar End */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
