import React, { useState } from 'react'
import './Modal.scss'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/dataSlice';
const Modal = (props) => {
 
  const dispatch = useDispatch()
  
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    const obj = {
      id: Date.now(), 
      name: data.name,
      url: 'kalori-logo.webp',
      calories: [
        {id:1,name:'100Gr',calori:data.caloriOne},
        {id:2,name:'1 Paket',calori:data.caloriTwo}
      ]
      
    }
    
    dispatch(addProduct(obj))
    reset()
   
  }

  return (
    <div className='add-modal'>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          
        <div>
          <p>Eklenecek Ürün İsmini Giriniz</p>
        <input
          placeholder="Ürün İsmi..."
          type="text"
          {...register("name")}
        />
          <p>100 Gr'da Kaç Kalori</p>
        <input
          placeholder="100 Gr Kalori"
          type="number"
          {...register("caloriOne")}
        />
         <p>100 Gr'da Kaç Kalori</p>
        <input
          placeholder="1 Paket/Şişe Kalori"
          type="number"
          {...register("caloriTwo")}
        />
        
        <button type="submit">Ekle</button>
        </div>
      
      </form>
    </div>
  )
}

export default Modal