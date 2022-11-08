// import React, { Component } from 'react'

// interface IUser {
//     name: string
//     age :number
// }
// // type Props = {
// //     userProps :Props;
// // }
// interface IProps{
//     userProps :IUser;
// }

// class ItemUserClass extends Component<IProps> {

//   render() {
//     return (
//       <div>
//         <p>{this.props.userProps.name}</p>
//         <p>{this.props.userProps.age}</p>
//       </div>
//     )
//   }
// }
// export default ItemUserClass
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {AiOutlineLike,AiOutlineStar,AiOutlineDislike,AiFillStar,} from 'react-icons/ai';

export interface IAppProps {
  title?: string;
}

export interface IAppState {
  color: string;
}

class ItemUserClass extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      color: "red",
    };
  }

  handleClickBlue = () => {
    this.setState({
      color: "blue",
    });
  };

  handleClickRed = () => {
    this.setState({
      color: "red",
    });
  };

  public render() {
    return (
      <div className="w-50 m-auto text-center">
      <i><AiOutlineLike/></i>
      <i style={{color:"yellow"}}><AiFillStar/></i>
      <i style={{color:"yellow"}}><AiFillStar/></i>
      <i style={{color:"yellow"}}><AiFillStar/></i>
      <i style={{color:"yellow"}}><AiFillStar/></i>
      <i><AiOutlineStar/></i>
      <i><AiOutlineDislike/></i>
      
     
   
      <p style={{ color: this.state.color }}>{this.state.color}</p>
      <button
        disabled={this.state.color === "red"}
        onClick={this.handleClickRed}
      >
        Red
      </button>
      <button
        disabled={this.state.color === "blue"}
        onClick={this.handleClickBlue}
      >
        Blue
      </button>
    </div>
    );
  }
}

export default ItemUserClass;
