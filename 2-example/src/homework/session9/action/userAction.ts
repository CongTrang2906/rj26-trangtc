import { Dispatch } from "react";

interface IAction {
    type: string;
    payload?: any;
  }
//function để call API
  export const getUsersAsync = (): any => {
    return (dispatch: Dispatch<any>) => {
      dispatch(getUsers_Pendding());
      const URL_USER ='https://634e9e894af5fdff3a623edf.mockapi.io/users'
      fetch(URL_USER,{
        method:"GET"
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(getUsers_Success(data));
          
        })
        .catch((error) => {
          dispatch(getUsers_Error(error));
        });
    };
  };
// 3 case tương ứng với 3 action 
//B1 :
//Tạo action là dễ nhất nên ta sẽ tạo action:
const getUsers_Pendding = (data?: object): IAction => ({
    type: "GET_PENDING", // ACTION TYPE
    payload: data, // PARAMETER
  });

const getUsers_Success = (data?: object): IAction => ({
    type: "GET_SUCCESS", // ACTION TYPE
    payload: data, // PARAMETER
  });

const getUsers_Error = (data?: object): IAction => ({
    type: "GET_ERROR", // ACTION TYPE
    payload: data, // PARAMETER
  });