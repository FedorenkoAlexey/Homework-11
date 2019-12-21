import React, { Component } from "react";
// import React from "react";
import "./css/style.css";
import "./css/fonts.css";
import Message from "./message";

class HomeComponent extends Component {
  render() {
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
          <Message></Message>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
