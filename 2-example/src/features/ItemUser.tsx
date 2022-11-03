import React from 'react'


interface IUser{
    name: string
    age :number
}
interface IProps{
    userProps :IUser;
    
}              // tên biến | kiểu dữ liệu biến
function ItemUser(props :IProps) {
    const {userProps}  = props;
  return (
    <div>
        <p>{userProps.name}</p>
        <p>{userProps.age}</p>
    </div>
  )
}

export default ItemUser