import React, { Component } from "react";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import cookie from "react-cookies";

import "./style.css";
import "./fonts.css";
import "react-confirm-alert/src/react-confirm-alert.css";

import {
  setPasswordText,
  setLoginText,
  setLogin,
  setLogOut,
  activateSpinner,
  spinnerOff
} from "../../store/auth/actions";

// let allCookes = document.cookie;

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errColor: "",
      errBorder: ""
    };
  }
  onLoginHandle = e => {
    // console.log(e.target.value);
    this.props.setLoginText(e.target.value);
  };

  onPasswordHandle = e => {
    this.props.setPasswordText(e.target.value);
    // console.log(this.props.password);
  };

  alertMessage = () => {
    confirmAlert({
      title: "Confirm to exit",
      message: "Are you sure you want to sign out?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.onLogout()
        },
        {
          label: "Cancel"
          // onClick: () => alert("Click NO")
        }
      ]
    });
  };

  onLogin = () => {
    const { authLogin, authPassword, login, password, token } = this.props;
    if (authLogin === login && authPassword === password) {
      this.props.setLoginText("");
      this.props.setPasswordText("");
      this.props.activateSpinner();
      setTimeout(() => {
        this.props.setLogin();
      }, 1000);
      cookie.save("token", token, { path: "/" });
    } else {
      this.setState({
        errColor: "#ff9595",
        errBorder: " 2px solid red"
      });
      setTimeout(() => {
        this.setState({
          errColor: "",
          errBorder: ""
        });
      }, 2000);
    }
  };

  onLogout = () => {
    this.props.spinnerOff();
    this.props.setLogOut();
    cookie.remove("token", { path: "/" });
  };

  componentDidMount() {
    const { token } = this.props;
    const logged = cookie.load("token");
    token === logged ? this.props.setLogin() : console.log("Cookies empty");
  }

  render() {
    const { login, password, isAuth, isLoading } = this.props;
    const errorColor = {
      border: this.state.errBorder,
      background: this.state.errColor
    };
    return (
      <div className="home-wrapper">
        <div className="center">
          <h1>
            <span className="smart">Smart </span>Agency Landing Page
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            fuga provident. Libero magni quibusdam labore ad iste saepe hic,
            maxime qui ipsum tempore beatae, volu tomi ptates doloremque rerum
            aspernatur dolorum at!
          </p>
        </div>
        <div className="bottom">
          <div className="message">
            {isAuth ? (
              <h3 className="test">
                <span className="send">Welcome </span>
              </h3>
            ) : (
              <div className="auth-container">
                <h3 className="test">
                  <span className="send">Sign In </span>To access the site
                </h3>
                <input
                  style={errorColor}
                  type="text"
                  className="input"
                  placeholder="Login"
                  value={login}
                  onChange={this.onLoginHandle}
                />
                <div className="line"></div>
                <input
                  style={errorColor}
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={this.onPasswordHandle}
                />
                <div className="line"></div>
              </div>
            )}
            ;
            {isAuth ? (
              <button className="login-btn" onClick={this.alertMessage}>
                Sign Out
              </button>
            ) : (
              <button className="login-btn" onClick={this.onLogin}>
                {isLoading && (
                  <i
                    className="fa fa-spinner fa-spin fa-1g fa-fw"
                    style={{ marginRight: "5px" }}
                  />
                )}
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    login: state.auth.login,
    password: state.auth.password,
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    authLogin: state.auth.authLogin,
    authPassword: state.auth.authPassword,
    token: state.auth.token
  };
};

const mapDispatch = {
  setLoginText: setLoginText,
  setPasswordText: setPasswordText,
  setLogin: setLogin,
  setLogOut: setLogOut,
  activateSpinner: activateSpinner,
  spinnerOff: spinnerOff
};

export default connect(mapState, mapDispatch)(HomeComponent);
