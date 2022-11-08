import React, { Component } from "react";
import {AiOutlineLike , AiOutlineDislike } from "react-icons/ai";

interface IProps {}
interface IState {
  like: boolean;
}

export default class LikeBtn extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      like: true, //default value state number
    };
  }

  setLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };

  render() {
    return (
      <>
        <div onClick={this.setLike}>
          {this.state.like ? <AiOutlineLike /> : <AiOutlineDislike />}
        </div>
      </>
    );
  }
}
