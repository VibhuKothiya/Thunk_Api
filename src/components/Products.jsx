import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../redux/store/Action/newsAction'

const Products = () => {
//    const [data, setData] = useState()
   const dispatch = useDispatch()
   const { News, error, isLoading } = useSelector((state) => state.NewsList)

   useEffect(()=>{
    dispatch(fetchNews())
   },[dispatch])
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {News.map((val)=>{
                return (
                    <div class="card" style={{width: "18rem;"}}>
                <div class="card-body">
                    <h5 class="card-title">{val.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{val.id}</h6>
                    <p class="card-text">{val.completed}</p>
                    <button className='m-2'>Delete</button>
                    <button>Update</button>
                </div>
            </div>
                )
            })}
            
        </div>
    )
}

export default Products;
