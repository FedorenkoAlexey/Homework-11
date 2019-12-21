import React, { Component } from "react";
import "./css/style.css";
import "./css/fonts.css";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import watch from "./assets/watch.png";

class ProductComponent extends Component {
  render() {
    return (
      <div className="services">
        <div className="serv-head">
          <h1>
            <span className="serv">Services </span>We Provide
          </h1>
          <p className="text4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipiscing elit Maiores fuga
            provident Libero.
          </p>
        </div>
        <div className="wrap">
          <div className="icons">
            <div className="serv-block-act">
              <img src={icon1} alt="" />
            </div>
            <div className="serv-block">
              <img src={icon2} alt="" />
            </div>
            <div className="serv-block">
              <img src={icon3} alt="" />
            </div>
            <div className="serv-block">
              <img src={icon4} alt="" />
            </div>
          </div>
          <div className="serv-text">
            <h2>Modern App Design</h2>
            <div className="line"></div>
            <p className="one">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              earum totam ad sint error porro. Consectetur, sunt, aperiam. Magni
              rem optio distinctio illum consequuntur delectus nulla illo
              aperiam itaque cumque.
            </p>

            <p className="two">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              officia vitae eveniet quam rem unde facilis.
            </p>

            <p className="three">vitae eveniet quam rem unde facilis.</p>
            <button>+ Know More</button>
          </div>
          <div className="watch">
            <img src={watch} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
