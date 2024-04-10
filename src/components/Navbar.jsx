import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import Modal from './Modal';
import Products from './Products';
import Product from '../pages/Product';

const Navbar = () => {
  const { News } = useSelector((state) => state.NewsList);
  const [search, setSearch] = useState('');

  const searchData = (e) =>{
    setSearch(e.target.value);
  };

  const filteredNews = search ? News.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())) : News;

  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
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
          </div>
        </div>
      </nav>
      <div className="row">      
            
      {filteredNews.map((news, index) => (
        <Product key={index} news={news} />
      ))}
      </div>
      </div>
   
  );
};

export default Navbar;
