import React, { Component } from "react";
import "./style/HelloWorld.css";
import Img from "../../assets/img/adeb.png";

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <img src={Img} alt="adeb profil" className="absolute top-[25%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
        <h1 className="welcome absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          HelloWorld
        </h1>
      </div>
    );
  }
}
