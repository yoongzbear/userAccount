import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ForgotPw = () => {
    const navigate = useNavigate();
    return (
        //forgot password form
        <div className='wrapper'>
            <h1>Reset Password</h1>
            <form action="">
            <label>Username: </label>
            <div className="input-field">
                <input type="text" placeholder="Username" required/>
            </div>
            <label>New Password: </label>
            <div className="input-field">          
                <input type="text" placeholder="Password" required/>
            </div>
            <label>Confirm New Password: </label>
            <div className="input-field">          
                <input type="text" placeholder="Password" required/>
            </div>
            <button onClick={() => navigate('/login')}>Reset Password</button>
            <div className ='signin-link'>
                <p>New user? Register <Link to="/">here</Link>!</p>
            </div>
            </form>
    </div>
    )
}

export default ForgotPw;
