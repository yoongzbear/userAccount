import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
    const navigate = useNavigate();
    return (
        <div className="main">
            <div className="logout-button">
                <button>Logout</button>
            </div>
            <div className="profile-body">
                <h1>Welcome, [name]!</h1>
                <h1>User Profile</h1>
                <div className="profile">
                    <label>Username: </label>
                    <div className="text-box">
                        <p>[username]</p>
                    </div>
                    <label>Full Name: </label>
                    <div className="text-box">
                        <p>[full name]</p>
                    </div>
                </div>
                <div className="about">
                    <p>About me:</p>
                    <form action="">                        
                        <div className="input-box">
                            <textarea rows="6" cols="50" placeholder="About me" />                        
                        </div>
                        <button>Draft</button>
                        <button>Submit</button>
                    </form>                
                </div>
            </div>
        </div>
       
    );
}

export default UserProfile;