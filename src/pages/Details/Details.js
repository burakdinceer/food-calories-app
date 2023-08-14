import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Details.scss";
import { Link } from "react-router-dom";
const Details = () => {
  const { product } = useSelector((state) => state.data);
  const { id } = useParams();

  const productDetail = product.find((item) => item.id === parseInt(id));

  return (
    <div className="details-page">
         <div className="details-card">
            <div className="detail-img">
                <img src={productDetail.url}/>
            </div>
            <div className="details-text">
                    {productDetail.name}
            </div>
            <div className="detail-calori">
               <div className="calori-zero">
               {productDetail.calories[0].name}
                {productDetail.calories[0].calori}
               </div>
                <div className="calori-one">
                {productDetail.calories[1].name}
                {productDetail.calories[1].calori}
                </div>
            </div>
         </div>

       <Link to='/'>Anasayfaya Dön</Link>
    </div>
  )
};

export default Details;
