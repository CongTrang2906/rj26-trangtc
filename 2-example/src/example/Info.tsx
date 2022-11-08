import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ItemUserClass from "../features/ItemUserClass";





interface IUser {
  name: string;
  age: number;
  address: string;
}
function App() {
  const listUser: Array<IUser> = [
    {
      name: "Công Tráng",
      age: 23,
      address: "Huế",
    },
    {
      name: "Văn Trường",
      age: 24,
      address: "Huế",
    },
    {
      name: "Văn Qui",
      age: 25,
      address: "Huế",
    },
  ];
  return (
    <div>    
         <div className="color__blue">
      <div className="main">
        {/* -----------Avatar------------- */}
        <div className="imgcontainer">
          <img
            src="https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg"
            alt="avatar"
            className="avatar"
          />
        </div>
        {/* -------------Info----------------- */}
        {/* render */}
        <div className="name">
          {listUser?.map((user, index) => {
            return (
              <div  key={index}>
                
                {/* <p>{user.name}</p>
                <p>{user.address}</p> */}
              </div>
            );
          })}
          <p className="career">Developer ReactJs</p>
        </div>

        {/* --------------Contact------------------- */}
        <div className="contact">
          <h2>Thông tin liên hệ :</h2>
          <ul>
            <li>
              Facebook:<a href="https://www.facebook.com/congtrang2906"></a>
            </li>
            <li>Email:congtrang2906@gmail.com</li>
            <li>SDT:0329200254</li>
          </ul>
        </div>
        <div className="other">
          <h2>Thông tin thêm :</h2>
          <ul>
            <li>
              <a href="mailto:congtrang2906@gmail.com">Mail to Tráng</a>
            </li>
            <li>
              <a href="https://www.messenger.com/t/100025005122916">
                Chat With Me
              </a>
            </li>
          </ul>
        </div>
        {/* ------------------Footer--------------------- */}
        <div id="footer">
          <div className="socials-list">
            {/* <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaYoutube />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaLinkedin />
            </a> */}
          </div>
          <p className="copyright">
            Powered by <a href="">w3.css</a>
          </p>
        </div>
      </div>
    </div>
    </div>

 
  );
}

export default App;
