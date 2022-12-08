import { combineReducers } from "redux";

//B1: Tạo root reducer
interface IAction {
  type: string;
  payload?: any;
}
// quản lý 3 state
const defaultState = {
  users: [],
  loading: false,
  error: null,
};
//userReducer phải nhận một state và một action
//1. đang đi get
//2. get thành công
//3. get thất bại

//B2 :
//Tiếp theo là tạo rootReducer. Nó nhận vào 2 tham số là state và action,
// trả về state mới tùy theo action được gọi. Ta mặc định state ban đầu của counter là 0, code như sau:
const userReducers = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case "GET_PENDING":
      return { ...state, loading: true };
      break;
    case "GET_SUCCESS":
      return { ...state, users: action.payload, error: null, loading: false };
      break;
    case "GET_ERROR":
      return { ...state, error: action.payload, loading: false };
      break;

    default:
      return state;
  }
};
const rootReducers = combineReducers({
  userReducers,
});
export default rootReducers;
export type State = ReturnType<typeof rootReducers>;
