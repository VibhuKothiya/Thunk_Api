import { useDispatch } from 'react-redux';
import { Delete_News, ViewData, fetchNews } from '../redux/store/Action/newsAction';

const Products = ({ news }) => {
    // console.log(news,"productssss");
    const dispatch = useDispatch();
    
   const deleteData = (id) => {
        dispatch(Delete_News(id));
        dispatch(fetchNews());
    };

    const viewData = (id) => {
        dispatch(ViewData(id));
    };

    // useEffect(() => {
    //     dispatch(fetchNews());
    // }, []);

    if (!news || Object.keys(news).length === 0) {
        return null; 
    }
    return (
        
            <div className="col-md-3">
                <div className="card mt-3 mb-3" style={{ width: "18rem", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{news.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{news.category}</h6>
                        <p className="card-text"  style={{fontWeight:'400'}}>{news.description}</p>
                        <button className='m-2 btn btn-secondary' onClick={() => {deleteData(news.id)}}>Delete</button>
                        <button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {viewData(news.id)}}>View</button>
                    </div>
                </div>
            </div>
        
    );
};

export default Products;
