import './App.css';
import { Route, Routes, Router, Navigate, Link} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import { useSelector} from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// {Admin ? <Products /> : <Navigate to="/LoginForm" />}
function App() {
  const {admin} = useSelector((state) => state.NewsList)
  const navigate = useNavigate();
  console.log(admin, "in appp"); 

  useEffect(() => {    
    if (admin) {
      navigate('/navbar'); 
    }
  }, [admin, navigate]);
  
    {
      return (   
        <>      
        <Routes>
          <Route path='/' exact element={<LoginForm />}/>
          <Route path='/navbar' exact element={<Navbar />}/>        
        </Routes>          
        </>
        
      )      
  }  
}

export default App;
