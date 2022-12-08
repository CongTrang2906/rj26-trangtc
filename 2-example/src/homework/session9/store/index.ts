import { createStore, applyMiddleware, Store } from "redux";
import rootReducers from '../rootReducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
//B3:
// Có rootReducer rồi, ta bỏ nó vào store.
// Redux hỗ trợ phương thức createStore nhận vào reducer và trả về store:
const store: Store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store