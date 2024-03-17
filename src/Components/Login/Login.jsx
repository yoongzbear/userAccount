import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    return (
        //login form
        <div className='wrapper'>
            <h1>Account Login</h1>
            <form action="">
            <label>Username: </label>
            <div className="input-field">
                <input type="text" placeholder="Username" required/>
            </div>
            <label>Password: </label>
            <div className="input-field">          
                <input type="text" placeholder="Password" required/>
            </div>
            <div className='forgot'>
                <Link to="/forgotpw">Forgot your password?</Link>
            </div>
            <button onClick={() => navigate('/profile')}>Log In</button>
            <div className ='signin-link'>
                <p>New user? Register <Link to="/">here</Link>!</p>
            </div>
            </form>
    </div>
    )
}

export default Login;