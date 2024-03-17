import React from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  return (
    //registration form
    <div className='wrapper'>
      <h1>Account Registration</h1>
      <form action="">
        <label>Username: </label>
        <div className="input-field">
          <input type="text" placeholder="Username" required/>
        </div>
        <label>Full Name: </label>
        <div className="input-field">          
          <input type="text" placeholder="Full Name" required/>
        </div>
        <label>Password: </label>
        <div className="input-field">          
          <input type="text" placeholder="Password" required/>
        </div>
        <label>Confirm Password: </label>
        <div className="input-field">          
          <input type="text" placeholder="Confirm Password" required/>
        </div>
        <button type="submit" onClick={() => navigate('/login')}>Log In</button>
        <div className ='signin-link'>
          <p>Already have an account? Sign in <Link to="/login">here</Link>!</p>
        </div>
      </form>
    </div>
  );
};

export default Registration;