import React from 'react'
// giá trị khởi tạo ban đầu 
interface IUser {
    userName: string;
    password: string;
    gender: string;
    children: boolean;
    country: string;
  }
// firt- render sẽ hiển thị giá trị khởi tạo ban đầu  
// khi sửa giá trị ban đầu  :  
  const defaultUser: IUser = {
    userName: "trangtc",
    password: "123",
    gender: "woman",
    children: true,
    country: "VN",
  };

function FormF() {
    const [inputs, setInputs] = React.useState(defaultUser);

  //React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  // handlechange sẽ xử lý : check type input  : phải checkbox không , nếu không sẽ chạy vào ô else
  const handleChange = (e: any) => {
    if (e.target.type === "checkbox") {
      setInputs((values) => ({
        ...values,
        [e.target.name]: e.target.checked,
      }));
    } else {
      // set giá trị ban đầu : 5 trường , update thuộc tính , ghì đè lại thuộc tính ban đầu 
      setInputs((values) => ({ ...values, [e.target?.name]: e.target?.value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={inputs.userName}
          // B1 : khi sửa giá trị ban đầu sẽ chạy vào onchange -> handleChange
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChange}
        />
        <label className="mr-2" htmlFor="country">
          Country
        </label>
        <select name="country" value={inputs.country} onChange={handleChange}>
          <option value="VN">Vietnam</option>
          <option value="US">United State</option>
          <option value="JP">Japan</option>
        </select>

        <br />

        <label htmlFor="gender">Man</label>
        <input
          type="radio"
          name="gender"
          value="man"
          checked={inputs.gender === "man"}
          onChange={handleChange}
        />

        <label htmlFor="gender">Woman</label>
        <input
          type="radio"
          name="gender"
          value="woman"
          checked={inputs.gender !== "man"}
          onChange={handleChange}
        />

        <label htmlFor="children">Children</label>
        <input
          type="checkbox"
          name="children"
          checked={!!inputs.children}
          onChange={handleChange}
        />

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FormF