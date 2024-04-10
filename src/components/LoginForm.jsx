import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { loginAdmin } from '../redux/store/Action/newsAction';
import { Link } from 'react-router-dom';


const LoginForm = () => {

    const [loginData, setloginData] = useState();
    
    let dispatch = useDispatch();  

    const inputHandle = (e) => {
        setloginData({...loginData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData, "login data");
        dispatch(loginAdmin(loginData))
    }

    return (
        <>
            <div className="container">
                <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>         
                        {/* onSubmit={(e) => handleSubmit(e)} */}
                        <div className="input-box">
                            <input type="email" placeholder="Email" name='email' onChange={inputHandle}/>
                            <i className="fa fa-envelope"></i>
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder="Password" name='password' onChange={inputHandle}/>
                            <i className="fa fa-lock"></i>
                        </div>

                        <div className="rembar">
                            <input id="rembar" type="checkbox" />
                            <label htmlFor="rembar">remember me</label>
                        </div>
        
                        <button type='submit' className='fs-6'>Login</button>
                        {/* onClick={(e) => handleSubmit(e)} */}
                        <div className="links">
                            <p>Forgot password</p>
                            <p>You don't have an account</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default LoginForm
