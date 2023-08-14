import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/dataSlice'
import './ListProduct.scss'
const ListProduct = ({ listProduct }) => {

  const {product} = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    const newArr = product.filter(item => (
      item.id === id ? dispatch(deleteProduct(id)) : item
    ))
   
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
                        <button className='details-btn'>Detaylı İncele</button>
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