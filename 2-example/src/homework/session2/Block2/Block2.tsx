import React, { Component } from 'react'

type Props = {
  icon:string
  title:string
  color:string
  color1:string
}

type State = {}

class Block2 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="body-layout">
            <div style={{backgroundColor:this.props.color}} className="icon">
                <i className={this.props.icon}></i>
            </div>
            <p>{this.props.title}</p>
            <div className="progress">
               
            </div>
        </div>
    )
  }
}

export default Block2