import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import Modal from './Modal';

import {useDispatch} from 'react-redux'
import { fetchNews, logoutAdmin } from '../redux/store/Action/newsAction';
import LoginForm from './LoginForm';
import Products from './Products'
import { ADMIN_LOGIN_SUCCESS } from '../redux/store/type';

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
      // Remove admin data from localStorage
      // localStorage.removeItem("LoginData");
  
      // Dispatch action to reset login state
      dispatch(logoutAdmin());
    
  }

  return (
    <>
    {isLogin? (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
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
      <div className="row">             
      {filteredNews.map((news, index) => (
        <Products key={index} news={news}/>
      ))}
      </div>
      </div>
    ):(<LoginForm />)
      }
      </>
   
  );
};

export default Navbar;
