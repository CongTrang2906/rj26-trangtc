import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync } from "../action/userAction";
//Bạn nên dùng Redux vì:

//Project càng lớn, giá trị redux càng nhiều, nhất là khi app có nhiều shared state và việc xử lý state phức tạp, được handle ở nhiều nơi. Redux là lựa chọn tốt nhất để quản lý state trong project lớn nếu bạn sử dụng React.
//Phân chia rõ ràng giữa shared state (các state toàn cục, app data) và UI state (thường nằm cục bộ trong 1 component).
//Để đi xin việc, chém gió với đồng nghiệp bằng những thuật ngữ siêu ảo: reducer, dispatch, thunk.
//Bạn không nên dùng Redux vì:

//Code rất nhiều để làm được rất ít chức năng
//Nếu bạn chỉ cần xử lý state phức tạp: Sử dụng useReducer hook
//Nếu bạn chỉ cần xử lý state global: React Context
//Việc dò tìm action để dispatch (linear search, O(n)) sẽ ảnh hưởng đến performance so với cách tương tác với state trực tiếp
interface Istate {
  userReducers: IUserReducer;
}
interface IUserReducer {
  users: Array<IUser>;
  loading: boolean;
  error: any;
}
interface IUser {
  name: string;
  avatar: string;
  age: number;
  id: string;
}
function ReduxUserList() {
  //Sử dụng useSelector của react-redux để lấy state counter từ store.
  //Sử dụng useDispatch để trả về function dispatch, truyền getUsersAsync vào dispatch để gọi 3 action này.
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: Istate) => state.userReducers);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);
  return (
    <>
      {loading && <p>Loadding ...</p>}
      {users?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default ReduxUserList;
