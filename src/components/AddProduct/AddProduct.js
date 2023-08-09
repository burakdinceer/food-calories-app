import React, { useState } from 'react'
import './AddProduct.scss'
import Modal from './Modal/Modal'
const AddProduct = () => {
  const [isActive,setIsActive] = useState(false)

  const handlePage = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='add-product'>
        <button onClick={handlePage}>Yeni Ürün Ekle</button>
    {
        isActive ?
        <Modal/>
        :
        null
    }
     

    </div>
  )
}

export default AddProduct