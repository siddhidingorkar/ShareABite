import React, { Component, useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">ShareABite</h1>
      <div className="menu-icons" onClick={handleclick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="nav-links" to="/">
            <i className="fa-solid fa-house-user"></i>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/about">
            <i className="fa-solid fa-circle-info"></i>
            About
          </Link>
        </li>
        
        <li>
          {user ? (
            <>
          
          <Link className="nav-links" to="/donate">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            Donate
          </Link>
      
              <Link className="nav-links" to="/dashboard">
                {`Hello, ${user.name}`}
              </Link>
              <Link className="nav-links" onClick={handleLogout}>
                <i className="fa-solid fa-right-to-bracket"></i>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-links" to="/login">
                <i className="fa-solid fa-right-to-bracket"></i>
                Login
              </Link>
              <Link className="nav-links" to="/signup">
                <i className="fa-solid fa-right-to-bracket"></i>
                SignUp
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
