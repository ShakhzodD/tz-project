import React from "react";
import "./navbar.css";
import { BsFillSuitDiamondFill } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_brand">
        <div className="navbar_br">
          <BsFillSuitDiamondFill className="navbar_icon" />
          <span>Skilline</span>
        </div>
      </div>
      <ul className="navbar_ul">
        <li className="navbar_li navbar1">
          <a href="/">Home</a>
        </li>
        <li className="navbar_li">
          <a href="/">Careers</a>
        </li>
        <li className="navbar_li">
          <a href="/">Blog</a>
        </li>
        <li className="navbar_li">
          <a href="/"> About Us</a>
        </li>
        <button className="navbar_btn btn">Login</button>
        <button className="navbar_btn_child btn">Sign Up</button>
      </ul>
    </div>
  );
}
