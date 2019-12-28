import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul className="header-list">
            <li>
              <NavLink
                to="/home"
                activeClassName="active"
                className="text-link"
              >
                Home
              </NavLink>
            </li>

            {this.props.isAuth ? (
              <ul className="protect-routes">
                <li>
                  <NavLink
                    to="/product"
                    activeClassName="active"
                    className="text-link"
                  >
                    Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    activeClassName="active"
                    className="text-link"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            ) : null}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapState = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapState)(Header);
