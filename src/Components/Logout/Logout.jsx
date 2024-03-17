import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        //logout display
        <div className='wrapper'>
            <h1>Account Logout</h1>
            <p>You have successfully logged out of your account. Thank you for using our website!</p>
            <div className ='signin-link'>
                <p>Want to log in again? Click <Link to="/login">here</Link>!</p>
            </div>    
        </div>
    )
}

export default Login;
