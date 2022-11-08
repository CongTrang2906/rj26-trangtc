import { useState } from "react";
import React from "react";
//---------------USE State
const gifts = ["cpu i9", "ram 32g", "RGB"];
//function component
function Ex() {
  const [gift, setGift] = useState(""); // giá trị khởi tạo 1 state =1

  //tạo hàm
  const HandleGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{gift || "chưa có phần thưởng"}</h1>
      <button onClick={HandleGift}>Lấy thưởng</button>
    </div>
  );
}
// export default Ex;

//1 chiều là chiều tương tác trên giao diện
//2 chiều dữ liệu

//----------------Two-way binding : gõ bên trong thì bên ngoài thay đổi / gõ bên ngoài thì bên trong thay đổi
function Ex1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({
      name,
      email,
    });
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Register</button>
      {/* <button onClick={()=>setName('Nguyễn văn B')}>Change</button> */}
    </div>
  );
}
//export default Ex1;

function Ex2() {
  const courses = [
    {
      id: 1,
      name: "java",
    },
    {
      id: 2,
      name: "C#",
    },
    {
      id: 3,
      name: "reactjs",
    },
  ];
  const [checked, setChecked] = useState(2);

  const handleSubmit = () => {
    //call API
    console.log({
      id: checked,
    });
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
      {/* <button onClick={()=>setName('Nguyễn văn B')}>Change</button> */}
    </div>
  );
}
//export default Ex2;

//---------------Todolist with useState
// function Ex3() {
//   const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//   console.log(storageJobs);
  

//   const [job, setJob] = useState('');
//   const [jobs, setJobs] = useState(storageJobs ??[]);
//   //test
//   console.log(job);

//   const handleSubmit = () => {
//     setJobs(prev =>{
//       const newJobs=[...prev,job]
//       const jsonJobs=JSON.stringify(newJobs)
//       return newJobs
//     } )
//     setJob("")
//   };

//   return (
//     <div>
//       <input value={job} onChange={(e) => setJob(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((jobs, index) => (
//           <li key={index}>{jobs}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Ex3;
