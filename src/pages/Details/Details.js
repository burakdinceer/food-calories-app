import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Details.scss";
const Details = () => {
  const { product } = useSelector((state) => state.data);
  const { id } = useParams();

  const productDetail = product.find((item) => item.id === parseInt(id));

  return <div></div>;
};

export default Details;
