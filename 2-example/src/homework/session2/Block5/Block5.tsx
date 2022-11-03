import React, { Component } from "react";

type Props = {
    image: string;
    title: string;
    content: string;
    size: string;
    price: string;
    button: string;
};

type State = {};

class Block5 extends Component<Props, State> {
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
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              {this.props.button}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Block5;
