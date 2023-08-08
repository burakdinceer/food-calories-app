import React from 'react'
import { useSelector } from 'react-redux'
import './ListProduct.scss'
const ListProduct = ({ products }) => {
   

  return (
    <div className='product'>
        {
            products.map((item,index) => 
            <div key={index} className='product-card'>
               <div> <img src={item.url}/></div>
               <div className='product-text'>
                 <h3>{item.name}</h3>
                 {
                    item.calories.filter(calori => calori.id === 1).map(filterCalori => (
                        <div className='product-calori'>
                           <div> {filterCalori.name} </div>  
                             <div>{filterCalori.calori}cl</div> 
                        </div>
                       
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