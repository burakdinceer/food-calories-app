import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListProduct from "../../components/ListProduct/ListProduct";
import SortProduct from "../../components/SortProduct/SortProduct";
import { filterInput } from "../../redux/dataSlice";
import "./Home.scss";
const Home = () => {
    
    const {product,filterData} = useSelector((state) => state.data)
    const dispatch = useDispatch()
    const handleChange = (el) => {
        const newArr = product.filter(item => item.name.toLowerCase().includes(el.toLowerCase()));
        dispatch(filterInput(newArr))
    }
  return (
    <div className="home-page">
      <div className="home-header">
        <img alt="LOGO" src="kalori-logo.webp" />
        <input onChange={(e)=>handleChange(e.target.value)} type='text' placeholder="Ürün Ara...." />
      </div>
        <SortProduct/>
        <ListProduct products={filterData.length > 0 ? filterData : product} />

    </div>
  );
};

export default Home;
