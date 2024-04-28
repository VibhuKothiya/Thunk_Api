import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAdmin, newSignUp } from '../redux/store/Action/newsAction';

const LoginForm = () => {

    const [loginData, setloginData] = useState({});
    const [signup, setSignup] = useState(false);
    const [signupData, setSignupData] = useState({});

    let dispatch = useDispatch();
   
    const inputHandle = (e) => {
        if (signup) {
            setSignupData({ ...signupData, [e.target.name]: e.target.value })
        }
        else {
            setloginData({ ...loginData, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(loginData.email, "login emaillll");
        if (!loginData.email || !loginData.password) {
            return alert("Fill all the data")
        }
        else {
            dispatch(loginAdmin(loginData))
        }
    }

    //Sign-up
    const signupUser = () => {
        console.log("Sign Uppppp");
        setSignup(true)
    }
    const backLogin = () => {
        setSignup(false)
    }

    const signUp = () => {
        if (!signupData.email || !signupData.password) {
            return alert("Fill all the data")
        }
        else {
            dispatch(newSignUp(signupData))
        }
    }

    return (
        <>
            <div className="container">
                {signup ? (<div className="login">
                    <h1>Sign Up</h1>
                    <form>
                        <div className="input-box">
                            <input type="email" placeholder="Email" name='email' onChange={inputHandle} />
                            <i className="fa fa-envelope"></i>
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder="Password" name='password' onChange={inputHandle} />
                            <i className="fa fa-lock"></i>
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder="confirm password" name='password' onChange={inputHandle} />
                            <i className="fa fa-lock"></i>
                        </div>

                        <div className="rembar">
                            <input id="rembar" type="checkbox" />
                            <label htmlFor="rembar">remember me</label>
                        </div>
                        <button onClick={signUp} type='submit' className='fs-6'>Sign Up</button>

                        {/* onClick={(e) => handleSubmit(e)} */}
                        <div className="links">
                            <p onClick={(backLogin)} style={{ color: '#ffff', cursor: 'pointer' }}>Login</p>

                        </div>
                    </form>
                </div>) : (<div className="login">

                    <h1>Login</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="input-box">
                            <input type="email" placeholder="Email" name='email' onChange={inputHandle} />
                            <i className="fa fa-envelope"></i>
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder="Password" name='password' onChange={inputHandle} />
                            <i className="fa fa-lock"></i>
                        </div>

                        <div className="rembar">
                            <input id="rembar" type="checkbox" />
                            <label htmlFor="rembar">remember me</label>
                        </div>
                        <button type='submit' className='fs-6'>Login</button>

                        {/* onClick={(e) => handleSubmit(e)} */}
                        <div className="links">
                            <p style={{ color: '#ffff', cursor: 'pointer' }}>Forgot password</p>
                            <p onClick={signupUser} style={{ color: '#ffff', cursor: 'pointer' }}>You don't have an account</p>
                        </div>
                    </form>
                </div>)}

            </div>
        </>
    )
}


export default LoginForm
