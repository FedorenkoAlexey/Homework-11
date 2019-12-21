// import React, { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

// class Header extends Component {
// render() {
// return;

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  </header>
);
// }
// }

export default Header;
