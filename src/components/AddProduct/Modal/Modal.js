import React, { useState } from "react";
import "./Modal.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/dataSlice";
const Modal = (props) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const obj = {
      id: Date.now(),
      name: data.name,
      url: "kalori-logo.webp",
      calories: [
        { id: 1, name: "100Gr", calori: data.caloriOne },
        { id: 2, name: "1 Paket", calori: data.caloriTwo },
      ],
    };

    dispatch(addProduct(obj));
    reset();
    props.modalClose()
  };

  return (
    <div className="add-modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-main">
          <div className="modal-product">
            <p>Eklenecek Ürün İsmi</p>
            <input
              placeholder="Ürün İsmi..."
              type="text"
              required
              {...register("name")}
            />
          </div>
          <div className="modal-calori-one">
            <p>100 Gr'da Kalori ?</p>
            <input
              placeholder="100 Gr Kalori"
              type="number"
              required
              {...register("caloriOne")}
            />
          </div>
          <div className="modal-calori-two">
            <p>1 Paket/Şişe/Adet Kalori?</p>
            <input
              placeholder="1 Paket/Şişe Kalori"
              type="number"
              required
              {...register("caloriTwo")}
            />
          </div>

          <button type="submit">Ekle</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
