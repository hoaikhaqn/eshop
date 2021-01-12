import React, { useState, useEffect } from 'react';
import CategoryList from './components/CategoryList';
import Banner from './components/Banner';
import Featured from './components/Featured';
import Category from './components/Category';
import ProductSlider from '../ProductSlider';
import firebase from '../../firebase';

function Home(props) {
  const [category, setCategory] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [hotProduct, setHotProduct] = useState([]);

  useState(async () => {
    let res = await firebase.getCollection("category")
    if (res.status == true) {
      setCategory(res.result)
    }
  }, [])

  useState(async () => {
    let res = await firebase.getCollection("products")
    if (res.status == true) {
      setHotProduct(res.result)
    }
  }, [])

  useState(async () => {
    let res = await firebase.getCollection("products")
    if (res.status == true) {
      setNewProduct(res.result)
    }
  }, [])

  return (
    <div className="content">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <CategoryList list={category} />
            </div>
            <div className="col-md-8">
              <Banner />
            </div>
          </div>
        </div>
      </div>
      <Featured />
      <Category />
      <div className="featured-product">
        <div className="container">
          <ProductSlider list={hotProduct} heading="Hot Product" />
        </div>
      </div>
      <div className="recent-product">
        <div className="container">
          <ProductSlider list={newProduct} heading="New Product" />
        </div>
      </div>
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </div>
  );
}

export default Home;