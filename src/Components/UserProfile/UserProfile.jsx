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
                    <table className="profile-table">
                        <tr>
                            <td className="profile-label">
                                <label>Username: </label>
                            </td>
                            <td className="profile-text">
                                <div className="text-box">
                                    <p>[username]</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="profile-label">
                                <label>Full Name: </label>
                            </td>
                            <td className="profile-text">
                                <div className="text-box">
                                    <p>[full name]</p>
                                </div>
                            </td>
                        </tr>
                    </table>            
                </div>
                <div className="about">
                    <p>About me:</p>
                    <form action="">                        
                        <div className="input-box">
                            <textarea rows="6" cols="50" placeholder="About me" />                        
                        </div>
                        <div className="about-button">
                            <button>Draft</button>
                            <button>Submit</button>
                        </div>
                    </form>                
                </div>
            </div>
        </div>
       
    );
}

export default UserProfile;
