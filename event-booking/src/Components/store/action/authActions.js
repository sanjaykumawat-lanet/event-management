import axios from "axios";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const getAuthToken = () => {
  return "Bearer " + localStorage.getItem("authToken");
};
// const baseUrl = "http://localhost:3000/";
<<<<<<< HEAD
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
=======
export const login = (email, password, action) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post(
        "http://localhost:3000/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            Role: action,
          },
        }
      );
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92

      let token = resp.data.token;
      localStorage.setItem("authToken", token);
      if (resp.status === 200) {
        dispatch({
          type: LOGIN,
          payload: resp.data,
        });
<<<<<<< HEAD
        return resp;
      }
      return resp;
=======
        return resp.status;
      }
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
    } catch (error) {
      console.log("error", error);
    }
  };
};

<<<<<<< HEAD
export const register = (data , action) => {
=======
export const register = (data) => {
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
  return async (dispatch) => {
    try {
      const resp = await axios.post(
        "http://localhost:3000/users/register",
<<<<<<< HEAD
        data,{
          headers:{
            Role:action
          }
        }
=======
        data
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
      );
      let token = resp.data.token;
      localStorage.setItem("authToken", token);
      if (resp.status === 200) {
        dispatch({
          type: REGISTER,
        });
        return resp.status;
      }
    } catch (error) {}
  };
};
