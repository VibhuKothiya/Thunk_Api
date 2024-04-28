import './App.css';
import { Route, Routes} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_LOGIN_SUCCESS } from './redux/store/type';

function App() {
  const dispatch = useDispatch();
  const {admin} = useSelector((state) => state.NewsList)
  const navigate = useNavigate();
  console.log(admin, "in appp"); 

  useEffect(() => {    
    if (admin) {
      navigate('/navbar'); 
    }
  }, [admin, navigate]);

  // Stay logged-in
    useEffect(() => {
        const loginData = JSON.parse(localStorage.getItem("LoginData"));
        console.log("useeffect logindata", loginData);
        if (loginData) {          
          dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: loginData
          });
        }
      }, []);
  
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
