import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style2.css";
import {AiOutlineLike,AiOutlineStar,AiOutlineDislike,AiFillStar,} from 'react-icons/ai';

type Props = {};

type State = {};

class BaiTap2 extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="main">
        <div className="image">
          <img src="https://josivn.com/sites/default/files/tivi-smart-casper-32HG5200.jpg" alt="" />
        </div>
        <div className="content">
          <p className="title">YOUNG SHOP</p>
          <p className="name-product">Samsung UHD TV 24inch</p>
          <p>
          <i style={{color:"yellow"}}><AiFillStar/></i>
          <i style={{color:"yellow"}}><AiFillStar/></i>
          <i style={{color:"yellow"}}><AiFillStar/></i>
          <i style={{color:"yellow"}}><AiFillStar/></i>
          <i><AiOutlineStar/></i>
            <span style={{ marginLeft: 10 }}>02</span>
          </p>
          <p>$599</p>
        </div>
      </div>
    );
  }
}

export default BaiTap2;
