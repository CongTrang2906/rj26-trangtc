import React, { Component } from "react";
import "./style6.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
type Props = {
  image: string;
  title: string;
  content: string;
  size: string;
  price: string;
  button: string;
  icon:string
};

type State = {};

class Block6 extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="main">
        <div className="course-item">
          <div className="heading">
            <img src={this.props.image} alt="" />
          </div>
          <div className="content">
            <h1 className="title">{this.props.title}</h1>
            <p className="info">{this.props.content}</p>
            <p className="size">{this.props.size}</p>
            <p>
              <b>{this.props.price}</b>
            </p>
            <button className="btAdd">
              <i className={this.props.icon}></i>
              {this.props.button}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Block6;
