import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav>
      <ul className="header-list">
        <li>
          <NavLink to="/home" activeClassName="active" className="text-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" activeClassName="active" className="text-link">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" className="text-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
