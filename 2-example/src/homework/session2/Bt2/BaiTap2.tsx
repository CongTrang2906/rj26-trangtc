import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style2.css";
import {
  FaStar,
 
} from "react-icons/fa";


type Props = {
  image:string
  title:string
  product:string
  icon:string
  icon1:string
  price:string

}

type State = {}

class BaiTap2 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='main'>
        <div className="image">
          <img src={this.props.image} alt="" />
        </div>
        <div className="content">
          <p className="title">{this.props.title}</p>
          <p className="name-product">{this.props.product}</p>
          <p >
             <i className={this.props.icon}></i>
             <i className={this.props.icon}></i>
             <i className={this.props.icon}></i>
             <i className={this.props.icon}></i>
             <i className={this.props.icon1}></i>
            

             <span style={{marginLeft:10}}>02</span>
          </p>
          <p>{this.props.price}</p>
        </div>

      </div>
    )
  }
}

export default BaiTap2