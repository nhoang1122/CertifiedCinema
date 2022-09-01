import React, {useState} from "react";
import "../Styles/SignUp.css";

import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../Context/AuthContext";


const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth();

  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email,password) 
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="signUp">
        <img
          className="bg-img"
          src="https://cutewallpaper.org/23/anime-movie-theatre-wallpaper/1472117585.jpg"
          alt=""
        />
        <div className="sign-div">
          <div className="form">
            <div className="form-div">
              <h1 className="h1-signup">SIGN UP</h1>
              <form onSubmit={handlerSubmit} className="signup-f">
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="EMAIL" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="PASSWORD" />
                <button className="signup-btn">SIGN UP</button>
                <p className="link">
                  <span className="span-link">
                    Already Subscribed? 
                  </span> {''}
                  <Link to='/login'>
                    SIGN IN
                  </Link> 
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
