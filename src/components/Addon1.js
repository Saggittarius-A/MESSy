import React, { Component } from "react";

import './todo1.css';

//import "bootstrap/dist/css/bootstrap.min.css";



export default class Addon1 extends Component {
  render() {
    const { title } = this.props;
    return (
      <li className="list-items">
        <h5>{title}</h5>
        <button className="btn-info" >.. Eat .. </button>
      </li>
    );
  }
}
