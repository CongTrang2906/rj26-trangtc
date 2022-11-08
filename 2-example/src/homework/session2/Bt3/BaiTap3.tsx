import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style3.css";


type Props = {}

type State = {}

class BaiTap3 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='main'>
        <div className="image">
          <img src="https://m.economictimes.com/thumb/msid-89089588,width-1200,height-900,resizemode-4,imgsize-85734/it-sector.jpg" alt="" />
        </div>
        <div className="content">
          <p className="title">Technology</p>
          <h1 className="name-product">Harman Kadon Onyx Studio Mini, Reviews & Experiences</h1>  
          <p className='date'>Fe 21, 2021 by drfurion</p>
        </div>
      </div>
    )
  }
}

export default BaiTap3