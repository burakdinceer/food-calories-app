import React from "react";
import ListProduct from "../../components/ListProduct/ListProduct";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-page">
      <div className="home-header">
        <img src="kalori-logo.webp" />
        <input placeholder="Ürün Ara...." />
      </div>

        <ListProduct/>

    </div>
  );
};

export default Home;
