import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/styleList.css'

function List() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
    
  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    fetch("https://634e9e894af5fdff3a623edf.mockapi.io/projects?page=1&limit=10", {
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

  const handleDelete = (userId: number) => {
    console.log('delete', userId);
    
    fetch("https://634e9e894af5fdff3a623edf.mockapi.io/projects/" + userId, {
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
  const handleUpdate = ()=>{
    // console.log(userId);
    navigate('/form/') 
  }
  return (
    <div  className="body">
       <button className="btn1 btn-ip2" onClick={() => handleUpdate()}>Create</button>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {users.map((users: any) => {
          return (
            <tr key={`users-${users.id}`}>
              <th scope="row">{users.id}</th>
              <td>{users.name}</td>
              <td className="btn-control">  
                <button className="btn1 btn-ip1" onClick={() => handleDelete(users.id)}>Delete</button>
               
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  )
}

export default List