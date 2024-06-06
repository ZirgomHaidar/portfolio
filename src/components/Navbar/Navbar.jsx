import React from "react";
import "./Navbar.css";
import logo from "../../assets/ZHlogo.svg";
import menu from "../../assets/menu.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="mylogo">
        <img src={logo} alt="melogo" />
      </div>
      <div className="menu">
        <img src={menu} alt="melogo" />
      </div>
    </div>
  );
};

export default Navbar;
