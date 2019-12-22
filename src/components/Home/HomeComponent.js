import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/style.css";
import "./css/fonts.css";

import { setPasswordText, setLoginText } from "../../store/auth/actions";
import Message from "./message";

class HomeComponent extends Component {
  render() {
    const { login, password, setLoginText, setPasswordText } = this.props;
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
          <Message
            login={login}
            password={password}
            onLoginHandler={setLoginText}
            onPasswordHandler={setPasswordText}
          ></Message>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    login: state.auth.login,
    password: state.auth.password
  };
};

const mapDispatch = {
  setLoginText: setLoginText,
  setPasswordText: setPasswordText
};

export default connect(mapState, mapDispatch)(HomeComponent);
