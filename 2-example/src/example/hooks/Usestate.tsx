import { useState } from "react";
//function component
function App1() {
  const [state, setState] = useState(1); // giá trị khởi tạo 1 state =1

//tạo hàm
  const handleIncreate = () => {
    setState(state + 1);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{state}</h1> 
      <button onClick={handleIncreate}>Increase</button>
    </div>
  );
}
export default App1;



//vd2
// function App2(){
// const [info, setInfo] = useState({
//     name: 'Nguoi Bi An',
//     age: 21,
//     address: 'Ha Noi, VN'
// })

// const handleUpdate = () => {
//   setInfo({
//         ...info,
//         bio: 'love blue',
//     })
// };

//   return (
//     <div className="App2" style={{ padding: 20 }}>
//       <h1>{JSON.stringify(info)}</h1> 
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }
// export default App2;
