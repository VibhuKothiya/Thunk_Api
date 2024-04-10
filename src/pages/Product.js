import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Delete_News, ViewData, fetchNews } from '../redux/store/Action/newsAction';
import Navbar from '../components/Navbar';


const Product = ({ news }) => {
    const dispatch = useDispatch();


    const deleteData = (id) => {
        dispatch(Delete_News(id));
        dispatch(fetchNews());
    };

    const viewData = (id) => {
        dispatch(ViewData(id));
    };

    useEffect(() => {
        dispatch(fetchNews());
    }, []);

    if (!news || Object.keys(news).length === 0) {
        return null;
    }
    return (
        <>
            
            <div className="col-md-3">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{news.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{news.category}</h6>
                        <p className="card-text">{news.description}</p>
                        <button className='m-2' onClick={() => { deleteData(news.id) }}>Delete</button>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { viewData(news.id) }}>View</button>
                    </div>
                </div>
            </div>
        </>

    );
};


export default Product
