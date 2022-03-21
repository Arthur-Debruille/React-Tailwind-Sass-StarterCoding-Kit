import React, { Component } from 'react'
import "./style/HelloWorld.css";

export default class HelloWorld extends Component {
  render() {
    return (
      <div className="welcome absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <h1>HelloWorld</h1>
      </div>
    );
  }
}

