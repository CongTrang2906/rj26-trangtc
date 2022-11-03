import React, { Component } from "react";
import "./style3.css";
import "bootstrap/dist/css/bootstrap.min.css";
type Props = {
  icon: string;
  title: string;
  statistical: string;
  color:string
};

type State = {};

class Block3 extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="flex-container">
        <div style={{ backgroundColor:this.props.color }}>
          <i className={this.props.icon}></i>
          <div className="content">
            <p className="title">{this.props.title}</p>
            <p className="statistical" style={{ fontSize: 20 }}>{this.props.statistical}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Block3;
