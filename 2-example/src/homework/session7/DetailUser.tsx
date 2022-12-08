
import React, { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";

interface IUser {
    avatar: string;
    code: string;
    email: string;
    id: string;
    name: string;
  }

function DetailUser() {
    let params =useParams();
    const [user, setUser]= useState<IUser>();
    useEffect(() => {
    getListDetailUser(params.id);
     }, []);
    
     const getListDetailUser=(userId: string | undefined)=>{
        fetch("https://634e9e894af5fdff3a623edf.mockapi.io/users/" + userId ,{
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            // viết một function để render ra màn hình
            setUser(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    //console.log(5);
     }
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={user?.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{user?.name}</h5>
          <p className="card-text">
            {user?.email}
          </p>
          <Link to={'/form/' + user?.id} className="btn btn-primary">
            Update
          </Link>
        </div>
      </div>
    </>
  )
}

export default DetailUser