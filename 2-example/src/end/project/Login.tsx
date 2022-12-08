import React, { useState } from 'react'
import '../style/styleLogin.css'
import {Link, useNavigate} from "react-router-dom";

interface IProps {
  setIsLogin: any;
}

function Login(props: IProps) {
  const { setIsLogin } = props;
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();


  const handleSubmit = () => {
    // console.log("submit", userName, userPassword);
    if(userName ==='admin' && userPassword ==='admin'){
        navigate('/list/') 
        setIsLogin && setIsLogin(true);
      alert('đăng nhập thành công');}
    else{
      alert('đăng nhập thất bại');
    }
    
  };
  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "name":
        setUserName(event.target.value);
        break;
      case "password":
        setUserPassword(event.target.value);
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
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="password"
            value={userPassword ? userPassword : ""}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
         
        <button className="btn1 btn-ip2" onClick={() => handleSubmit()}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login