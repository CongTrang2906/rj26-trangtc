import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style1.css";

type Props = {
  image:string
  title:string
  accessories:string
  product:string
  fashion:string
  sex:string

}

type State = {}

class BaiTap1 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='main'>
        <div className="image">
          <img src={this.props.image} alt="" />
        </div>
        <div className="content">
          <h1 style={{fontSize:35,fontWeight:500}}>{this.props.title}</h1>
          <p>{this.props.accessories}</p>
          <p>{this.props.product}</p>
          <p>{this.props.fashion}</p>
          <p>{this.props.sex}</p>
        </div>

      </div>
    )
  }
}

export default BaiTap1