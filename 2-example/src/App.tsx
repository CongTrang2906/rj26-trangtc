import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
//import ItemUser from "./features/ItemUser";
import ItemUserClass from "./features/ItemUserClass";
import BaiTap1 from "./homework/session2/Bt1/BaiTap1";
import BaiTap2 from "./homework/session2/Bt2/BaiTap2";
import BaiTap3 from "./homework/session2/Bt3/BaiTap3";
import Block3 from "./homework/session2/Block3/Block3";
import Block6 from "./homework/session2/Block6/Block6";
import Block2 from "./homework/session2/Block2/Block2";



// interface IUser {
//   name: string;
//   age: number;
//   address: string;
// }
function App() {
  // const listUser: Array<IUser> = [
  //   {
  //     name: "Công Tráng",
  //     age: 23,
  //     address: "Huế",
  //   },
  //   {
  //     name: "Văn Trường",
  //     age: 24,
  //     address: "Huế",
  //   },
  //   {
  //     name: "Văn Qui",
  //     age: 25,
  //     address: "Huế",
  //   },
  // ];
  return (
    <div>    
            {/* <BaiTap1
              image={"https://cf.shopee.vn/file/01e5ef34d42f9bc0cf301ef4acf85195"}
              title={"Clothing & Apparel"}
              accessories={"Accessories"}
              product={"Bags"}
              fashion={"Kid's Fashion"}
              sex={"Mens"}
            
            />  */}

            {/* <BaiTap2
              image={"https://josivn.com/sites/default/files/tivi-smart-casper-32HG5200.jpg"}
              title={"YOUNG SHOP"}
              product={"Samsung UHD TV 24inch"}
              icon={"fa-solid fa-star"}
              icon1={"fa-regular fa-star"}
              price={"$599"}
            /> */}
             
             {/* <BaiTap3 
             image={"https://m.economictimes.com/thumb/msid-89089588,width-1200,height-900,resizemode-4,imgsize-85734/it-sector.jpg"}
             title={"Technology"}
             product={"Harman Kadon Onyx Studio Mini, Reviews & Experiences "}
             date={"Fe 21, 2021 by drfurion"}
             /> */}


            {/* <Block2
             icon={"fa-brands fa-html5"}
             title={"HTML"}
             color={"green"}
             color1={"success"}
            
            /> */}

            {/* <div className="d-flex ">
             <Block3 
             color={"cornflowerblue"}
             icon={"fa-brands fa-facebook-f"}
             title={"Facebook"}
             statistical={"5,00,000 Likes"}
             />
              <Block3
              color={"deepskyblue"}
             icon={"fa-brands fa-twitter"}
             title={"Twitter"}
             statistical={"40,000 Tweets"}
             />
              <Block3
             color={"coral"}
             icon={"fa-brands fa-google-plus-g"}
             title={"Google +"}
             statistical={"4,60,000 Plus"}
             />
              <Block3
             color={"tomato"}
             icon={"fa-brands fa-pinterest"}
             title={"Pinterest"}
             statistical={"34,000 Pins"}
             />
            </div> */}


            

            <div className="d-flex ">
            <Block6
              image={"https://cf.shopee.vn/file/4575780d203ba774aaf87716436738b5"}
              title={"EODEM MODO TYPI"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              size={"XL/XXL/S"}
              price={"$25"}
              button={"Add to cart"}
              icon={"fa-sharp fa-solid fa-cart-shopping"}
            />
            <Block6
              image={"https://cf.shopee.vn/file/60cf9628907355fba3cbfe6f03ce4816"}
              title={"SEQUITUR MUTATIONEM"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              size={"XL/XXL/S"}
              price={"$25"}
              button={"Add to cart"}
              icon={"fa-sharp fa-solid fa-cart-shopping"}
            />
            <Block6
              image={"https://cf.shopee.vn/file/89aba24916e7fbffc1032dda3967c4b5_tn"}
              title={"CONSUETUDIUM LECTORUM"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              size={"XL/XXL/S"}
              price={"$25"}
              button={"Add to cart"}
              icon={"fa-sharp fa-solid fa-cart-shopping"}
            />
            <Block6
              image={"https://cf.shopee.com.br/file/75219c9e07bdf647388f31d455e8ef4d_tn"}
              title={"PARUM CLARAM"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              size={"XL/XXL/S"}
              price={"$25"}
              button={"Add to cart"}
              icon={"fa-sharp fa-solid fa-cart-shopping"}
            />
            </div>
    </div>

    // <div className="color__blue">
    //   <div className="main">
    //     {/* -----------Avatar------------- */}
    //     <div className="imgcontainer">
    //       <img
    //         src="https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg"
    //         alt="avatar"
    //         className="avatar"
    //       />
    //     </div>
    //     {/* -------------Info----------------- */}
    //     {/* render */}
    //     <div className="name">
    //       {listUser?.map((user, index) => {
    //         return (
    //           <div  key={index}>
    //             <ItemUserClass userProps={user} />
    //             {/* <p>{user.name}</p>
    //             <p>{user.address}</p> */}
    //           </div>
    //         );
    //       })}
    //       <p className="career">Developer ReactJs</p>
    //     </div>

    //     {/* --------------Contact------------------- */}
    //     <div className="contact">
    //       <h2>Thông tin liên hệ :</h2>
    //       <ul>
    //         <li>
    //           Facebook:<a href="https://www.facebook.com/congtrang2906"></a>
    //         </li>
    //         <li>Email:congtrang2906@gmail.com</li>
    //         <li>SDT:0329200254</li>
    //       </ul>
    //     </div>
    //     <div className="other">
    //       <h2>Thông tin thêm :</h2>
    //       <ul>
    //         <li>
    //           <a href="mailto:congtrang2906@gmail.com">Mail to Tráng</a>
    //         </li>
    //         <li>
    //           <a href="https://www.messenger.com/t/100025005122916">
    //             Chat With Me
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     {/* ------------------Footer--------------------- */}
    //     <div id="footer">
    //       <div className="socials-list">
    //         <a href="">
    //           <FaFacebook />
    //         </a>
    //         <a href="">
    //           <FaInstagram />
    //         </a>
    //         <a href="">
    //           <FaYoutube />
    //         </a>
    //         <a href="">
    //           <FaTwitter />
    //         </a>
    //         <a href="">
    //           <FaLinkedin />
    //         </a>
    //       </div>
    //       <p className="copyright">
    //         Powered by <a href="">w3.css</a>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
