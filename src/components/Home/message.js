import React from "react";
// import "./css/style.css";
// import "./css/fonts.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="message">
        <h3 className="test">
          <span className="send">Login </span>To access the site
        </h3>
        <input className="input" placeholder="Your Name" />
        <div className="line"></div>
        <input className="input" placeholder="Your Password" />
        <div className="line"></div>
        <a>LOGIN</a>
      </div>
    );
  }
}

export default Message;
