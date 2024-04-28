import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import Modal from './Modal';
import {useDispatch} from 'react-redux'
import { fetchNews, logoutAdmin } from '../redux/store/Action/newsAction';
import LoginForm from './LoginForm';
import Products from './Products';
import logo from '../img/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg'

const Navbar = () => {
  let dispatch = useDispatch()
  const { News, isLogin } = useSelector((state) => state.NewsList);
  const [search, setSearch] = useState('');

  const searchData = (e) =>{
    setSearch(e.target.value);
  };

  useEffect(() => {    
    dispatch(fetchNews());
    },[]);
  
     
  const filteredNews = search ? News.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())) : News;

  const handleLogout = () =>{       
      dispatch(logoutAdmin());    
  }

  return (
    <>
    <div className="container-fluid">
    {isLogin? (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" style={{width:'60px', cursor:'pointer'}}><img className='w-100'  src={logo}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">Admin Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searchData} />
              
            </form>
            <Modal />
            <div className="logout">
              <button onClick={handleLogout} className="btn btn-secondary m-3">Logout</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="section mt-5">
      <div className="row">             
      {filteredNews.map((news, index) => (
        <Products key={index} news={news}/>
      ))}
      </div>
      </div>
      </div>
    ):(<LoginForm />)
      }
      </div>
      </>
   
  );
};

export default Navbar;
