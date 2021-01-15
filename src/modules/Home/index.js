import React, { useState, useEffect } from 'react';
import CategoryList from './components/CategoryList';
import Banner from './components/Banner';
import Featured from './components/Featured.js';
import CategoryPhotos from './components/CategoryPhotos';
import ProductSlider from '../ProductSlider';
import firebase from '../../firebase';

function Home(props) {
  const [data, setData] = useState({});

  useState(() => {
    (async ()=>{
      const [resCategory,resBanner,resNewProduct,resHotProduct] = await Promise.all([
        firebase.getCollection("category"),
        firebase.getCollection("banner"),
        firebase.getProductsOrderBy("sold", "desc"),
        firebase.getCollection("products"),
      ])
      setData({
        category: resCategory.result,
        banner: resBanner.result,
        newProduct: resNewProduct.result,
        hotProduct: resHotProduct.result
      })
    })()
  }, [])

  return (
    <div className="content">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <CategoryList list={data.category} />
            </div>
            <div className="col-md-8">
              <div className="banner-wrapper" style={{ height: "100%", backgroundColor: "#eee" }}>
                <Banner list={data.banner} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Featured />
      <CategoryPhotos list={data.category} />
      <div className="featured-product">
        <div className="container">
          <ProductSlider list={data.hotProduct} heading="Hot Product" />
        </div>
      </div>
      <div className="recent-product">
        <div className="container">
          <ProductSlider list={data.newProduct} heading="New Product" />
        </div>
      </div>
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </div>
  );
}

export default Home;