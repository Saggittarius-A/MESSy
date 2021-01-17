import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default class TodoItem1 extends Component {
  render() {
    const { title } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h5>{title}</h5>
        <button className="btn-info" >.. Eat .. </button>
      </li>
    );
  }
}
