import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style1.css";

type Props = {}

type State = {}

class BaiTap1 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='main'>
        <div className="image">
          <img src="https://cf.shopee.vn/file/01e5ef34d42f9bc0cf301ef4acf85195" alt="" />
        </div>
        <div className="content">
          <h1 style={{fontSize:35,fontWeight:500}}>Clothing & Apparel</h1>
          <p>Accessories</p>
          <p>Bags</p>
          <p>Kid's Fashion</p>
          <p>Mens</p>
        </div>

      </div>
    )
  }
}

export default BaiTap1