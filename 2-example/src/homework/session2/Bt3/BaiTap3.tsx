import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style3.css";


type Props = {
  image:string
  title:string
  product:string
  date:string

}

type State = {}

class BaiTap3 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='main'>
        <div className="image">
          <img src={this.props.image} alt="" />
        </div>
        <div className="content">
          <p className="title">{this.props.title}</p>
          <h1 className="name-product">{this.props.product}</h1>  
          <p className='date'>{this.props.date}</p>
        </div>
      </div>
    )
  }
}

export default BaiTap3