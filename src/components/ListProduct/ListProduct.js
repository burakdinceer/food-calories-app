import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteProduct } from '../../redux/dataSlice'
import './ListProduct.scss'
const ListProduct = ({ listProduct }) => {

  const {product} = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleDelete = (id) => {
     product.filter(item => (
      item.id === id ? dispatch(deleteProduct(id)) : item
    ))
   
  }

  const handleNavigatePage = (id) => {
    navigate(`/${id}`)
  }

  return (
    <div className='product'>
        {
            listProduct.map((item,index) => 
            <div key={index} className='product-card'>
              <button onClick={()=>handleDelete(item.id)} className='delete-btn'> X </button>
               <div> <img src={item.url}/></div>
               <div className='product-text'>
                 <h3>{item.name}</h3>
                 {
                    item.calories.filter(calori => calori.id === 1).map(filterCalori => (
                       <>
                        <div className='product-calori'>
                           <div> {filterCalori.name} </div>  
                             <div>{filterCalori.calori}cl</div> 
                           
                        </div>
                        <button onClick={()=>handleNavigatePage(item.id)} className='details-btn'>Detaylı İncele</button>
                        <button className='add-product-calori'>+</button>
                       </>
                       
                    ))
                    
                 }
               </div>
            </div>
            )
        }
    </div>
  )
}

export default ListProduct