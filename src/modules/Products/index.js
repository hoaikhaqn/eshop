import React, { useState, useEffect } from 'react';
import Breadcrumb from '../Breadcrumb';
import ProductList from './components/ProductList.js';
import firebase from '../../firebase';

import { toCapitalize } from '../../utils';

function Products(props) {
    const [sortby, setSortby] = useState({value:"",text:"Sort by"});
    const [lastCrumb, setLastCrumb] = useState([]);
    const [products, setProducts] = useState([]);
    const [crumb, setCrumb] = useState([])

    // Category page
    useEffect(() => {
        // Get Data
        async function fetchData() {
            if (props.match.params.id) {
                let categoryID = props.match.params.id;

                let res1 = await firebase.getProductsByCategory("products", categoryID)
                if (res1.status == true) {
                    setProducts(res1.result)
                }

                let res2 = await firebase.getDocument("category", categoryID)
                if (res2.status == true) {
                    setLastCrumb(res2.result.name)
                }
            }
        }
        fetchData();
    }, [])

    // Search page
    useEffect(() => {
        async function fetchData() {
            if (props.match.params.keyword) {
                let keyword = props.match.params.keyword;

                let res = await firebase.getProductsByKeyword("products", keyword)

                if (res.status == true) {
                    setProducts(res.result)
                    setLastCrumb(props.match.params.keyword)
                }
            }
        }
        fetchData();
    }, [props.match.params.keyword])

    // Special page
    useEffect(() => {
        // Get Data
        async function fetchData() {
            let special = props.match.params.special;
            if (special) {
                if (special == 'best-seller') {
                    let res = await firebase.getProductsOrderBy("sold", "desc")
                    if (res.status == true) {
                        setProducts(res.result)
                        setLastCrumb(props.match.params.special)
                    }
                }
                if (special == 'promotional') {
                    let res = await firebase.getProductsOrderBy("discount", "asc")
                    if (res.status == true) {
                        setProducts(res.result)
                        setLastCrumb(props.match.params.special)
                    }
                }
            }
        }
        fetchData();
    }, [])


    // All products
    useEffect(() => {
        // Get Data
        async function fetchData() {
            if (!props.match.params.id && !props.match.params.special && !props.match.params.keyword) {
                let res = await firebase.getCollection("products")
                if (res.status == true) {
                    setProducts(res.result)
                    setLastCrumb('Products')
                }
            }
        }
        fetchData();
    }, [])

    // Set crumbs
    useEffect(() => {
        setCrumb([{ link: "/", label: "Home" }, { label: toCapitalize(lastCrumb) }])
    }, [lastCrumb])

    const onHandleSort = async (value) => {
        if(sortby.value != value){
            let res;
            switch (value) {
                case "new": {
                    res = await firebase.getProductsOrderBy("postAt")
                    setSortby({value,text:"Newest"})
                    break;
                }
                case "popular": {
                    res = await firebase.getProductsOrderBy("sold", "desc")
                    setSortby({value,text:"Popular"})
                    break;
                }
                case "cheap": {
                    res = await firebase.getProductsOrderBy("discount", "asc")
                    setSortby({value,text:"Most sale"})
                    break;
                }
            }
            if (res.status == true) {
                setProducts(res.result)
            }
        }
    }

    return (
        <div>
            <Breadcrumb crumbs={crumb} />
            <div className="product-view">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-view-top">
                                <div className="row justify-content-end">
                                    <div className="col-6 col-md-3 col-lg-2">
                                        <div className="product-short">
                                            <div className="dropdown">
                                                <div className="dropdown-toggle" data-toggle="dropdown">{sortby.text}</div>
                                                <ul className="dropdown-menu dropdown-menu-right">
                                                    {/* <li onClick={() => onHandleSort("new")} className="dropdown-item">Newest</li> */}
                                                    <a style={{cursor:"pointer"}} onClick={() => onHandleSort("popular")} className={`dropdown-item ${sortby.value == "popular" ? 'active':''}`}>Popular</a>
                                                    <a style={{cursor:"pointer"}} onClick={() => onHandleSort("cheap")} className={`dropdown-item ${sortby.value == "cheap" ? 'active':''}`}>Most sale</a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProductList list={products} />
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

export default Products;