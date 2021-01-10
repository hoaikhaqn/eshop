import React, { Component } from 'react';
import MainMenu from './components/MainMenu';
import Featured from './components/Featured';
import Category from './components/Category';
import ProductSlider from '../ProductSlider';
import * as firebase from "../../firebase";

function Home(props) {
  firebase.default.getDataCollection("users").then((data) => {
    console.log("Home",data);
  });
  return (
    <div className="content">
      <MainMenu />
      <Featured />
      <Category />
      <div className="featured-product">
        <div className="container">
          <ProductSlider heading="Feature Product" />
        </div>
      </div>
      <div className="recent-product">
        <div className="container">
          <ProductSlider heading="Recent Product" />
        </div>
      </div>
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </div>
  );
}

export default Home;