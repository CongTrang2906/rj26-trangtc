import React, { Component } from 'react'

interface IUser {
    name: string
    age :number
}
// type Props = {
//     userProps :Props;   
// }
interface IProps{
    userProps :IUser;   
}

class ItemUserClass extends Component<IProps> {
   
  render() {
    return (
      <div>
        <p>{this.props.userProps.name}</p>
        <p>{this.props.userProps.age}</p>
      </div>
    )
  }
}

export default ItemUserClass