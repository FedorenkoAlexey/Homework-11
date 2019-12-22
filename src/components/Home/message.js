import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  onLoginHandle = e => {
    console.log(e.target.value);
    console.log(this.props.setLoginText);
    // this.props.setLoginText(e.target.value);
  };

  onPasswordHandle = e => {
    this.props.setPasswordText(e.target.value);
  };

  render() {
    return (
      <div className="message">
        <h3 className="test">
          <span className="send">Login </span>To access the site
        </h3>
        <input
          type="text"
          className="input"
          placeholder="Your Login"
          value={this.props.login}
          onChange={this.onLoginHandle}
        />
        <div className="line"></div>
        <input
          type="password"
          className="input"
          placeholder="Your Password"
          value={this.props.password}
          onChange={this.onPasswordHandle}
        />
        <div className="line"></div>
        <a>LOGIN</a>
      </div>
    );
  }
}

export default Message;
