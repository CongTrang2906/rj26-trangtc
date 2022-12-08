import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Form() {
  const [userName, setUserName] = useState();
  const [userAvatar, setUserAvatar] = useState();
// Phần update user
  let params = useParams();
  
  useEffect(() => {
    getUser(params.id);
  }, []);
//Update : b1 getuser
  const getUser = (userId: string | undefined) => {
    let url = "https://634e9e894af5fdff3a623edf.mockapi.io/projects/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //set dữ liệu cho 1 thằng 
        setUserName(data?.name);
        setUserAvatar(data?.avatar);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

//Submit dữ liệu B2: khởi tạo và submit dữ liệu lên API
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit", userName, userAvatar);
  // khoi tao object data
    let data = {
      name: userName,
      avatar: userAvatar,
    };
    //checkupdate và post dữ liệu lên :nếu có id thì update , không có thì post
    if (params.id) {
      updateUser(data, params.id);
    } else {
      postUser(data);
    }
  };
 //Update b2 : call API  
  const updateUser = (data: any, userId: string) => {
    // call api postUser
    let url = "https://634e9e894af5fdff3a623edf.mockapi.io/projects/" + userId;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
//  Submit dữ liệu :B3 post dữ liệu lên mockAPI
  const postUser = (data: any) => {
    // call api postUser
    let url = "https://634e9e894af5fdff3a623edf.mockapi.io/projects";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
//Submit dữ liệu Bước 1 Nhập vào ấn submit consolog ra màn hình  
  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "name":
        setUserName(event.target.value);
        break;
      case "avatar":
        setUserAvatar(event.target.value);
        break;

      default:
        break;
    }
  };
  return (
    <div className="body1">
      {/* form bắt buộc phải có một even OnSubmit */}
      <form onSubmit={handleSubmit} className="w-55 m-auto mt-3" action="">
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            value={userName ? userName : ""}
            // Onchange khi thay đổi giá trị của nó
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-success" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form