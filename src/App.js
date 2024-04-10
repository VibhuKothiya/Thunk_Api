import './App.css';
import { Route, Routes, Router, Navigate, Link} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { useSelector} from 'react-redux'
import Home from './pages/Home';
import Product from './pages/Product';
// {Admin ? <Products /> : <Navigate to="/LoginForm" />}
function App() {
  const {admin} = useSelector((state) => state.NewsList)
  console.log(admin, "in appp");
   
  
    {
      return (   
        <>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/navbar' exact element={<Navbar />}/>         
          
        </Routes>      
        
        </>
        
      )

      
  }

  
}

export default App;
