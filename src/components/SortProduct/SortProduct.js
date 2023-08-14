import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listSortProduct } from '../../redux/dataSlice'
import './SortProduct.scss'
const SortProduct = () => {

    const {product} = useSelector((state) => state.data)
    const dispatch = useDispatch()

    const handleCaloriesSort = () => {
        const sortedCalori = [...product].sort((a, b) => {
        
                const caloriA = a.calories[0].calori; 
                const caloriB = b.calories[0].calori;
                return caloriB - caloriA;
            });

        dispatch(listSortProduct(sortedCalori));
    };

    const handleNameSort = () => {
        const sortedName = [...product].sort((a,b) => a.name.localeCompare(b.name));
        dispatch(listSortProduct(sortedName))
    }

  return (
    <div className='sort-product'>
        <button onClick={handleCaloriesSort}>Kaloriye Göre Listele</button>
        <button onClick={handleNameSort}>İsme Göre Listele</button>
    </div>
  )
}

export default SortProduct