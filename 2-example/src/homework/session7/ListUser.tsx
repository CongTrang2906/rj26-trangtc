import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './style/styleList.css'
import { useNavigate } from 'react-router-dom';
// dump data listUser = [{},{},{}]
// dua vao listUser.map -> render UI nhu requirement
// Thay doi data listUser: tu data dump -> data res API
// call API getListUser o componentWillMount
// call API -> res data -> setListUser(data)
//Tạo component listuser
function ListUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
    // du lieu gia dump
  useEffect(() => {
    getListUser();
  }, []);
//Render
  const getListUser = () => {
    fetch("https://634e9e894af5fdff3a623edf.mockapi.io/users?page=1&limit=10", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
      setUsers(data);
  })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // viet func handle Delete (nhan userId tuong ung vs row)
  // call API delete user
  // call xoa API thanh cong -> update ListUser (setState -> re-render)
  const handleDelete = (userId: number) => {
    //text 
    console.log('delete', userId);
    
    fetch("https://634e9e894af5fdff3a623edf.mockapi.io/users/" + userId, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
         // update list user -> call getListUser();
        getListUser();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  //Detail : b1
  const handleDetail = (userId:number)=>{
    console.log(userId);
    navigate('/detail/'+userId)
    
    
  }


  return (
    <div  className="body">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Avatar</th>
          <th scope="col">Age</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {users.map((users: any) => {
          return (
            <tr key={`users-${users.id}`}>
              <th scope="row">{users.id}</th>
              <td>{users.name}</td>
              <td className="text-break">{users.avatar}</td>
              <td>{users.age}</td>
              <td className="btn-control">
                <button className="btn1 btn-ip1" onClick={() => handleDetail(users.id)}>Detail</button>
                <button className="btn1 btn-ip2" onClick={() => handleDelete(users.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default ListUser;
