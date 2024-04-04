import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_News, ViewData, fetchNews } from '../redux/store/Action/newsAction'

const Products = () => {
       const [viewId, setViewId] = useState()
    const dispatch = useDispatch()
    const { News, error, isLoading } = useSelector((state) => state.NewsList)

       const deleteData = (id) =>{
            dispatch(Delete_News(id))
            dispatch(fetchNews())
       } 

       const View_Data = (id) => {
        // setViewId(id)
            dispatch(ViewData(id))
       }


    useEffect(() => {
        dispatch(fetchNews())
    }, [])
    return (
        <div className='row'>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {News.map((val) => {
                return (
                    <div className="col-md-3">
                        <div class="card" style={{ width: "18rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">{val.title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">{val.category}</h6>
                            <p class="card-text">{val.description}</p>
                            <button className='m-2' onClick={() => {deleteData(val.id)}}>Delete</button>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {View_Data(val.id)}}>View</button>
                        </div>
                    </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Products;
