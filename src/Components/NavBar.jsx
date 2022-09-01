import React from "react";
import { UilFilm } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../Context/AuthContext";

import "../Styles/NavBar.css";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      console.log("LOGOUT");
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="NavBar">
      <Link to="/">
        <UilFilm className="icon" size="50" color="#5D737E" />
      </Link>

      <h1 className="logo">CERTIFIED CINEMA</h1>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="sign-btn">ACCOUNT</button>
          </Link>

          <button onClick={handleLogout} className="sign-btn">
            LOGOUT
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="sign-btn">SIGN IN</button>
          </Link>
          <Link to="/signup">
            <button className="sign-btn">SIGN UP</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;