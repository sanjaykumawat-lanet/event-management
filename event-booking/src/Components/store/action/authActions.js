import axios from "axios";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const getAuthToken = () => {
  return "Bearer " + localStorage.getItem("authToken");
};
// const baseUrl = "http://localhost:3000/";
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });

      let token = resp.data.token;
      localStorage.setItem("authToken", token);
      if (resp.status === 200) {
        dispatch({
          type: LOGIN,
          payload: resp.data,
        });
        return resp;
      }
      return resp;
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const register = (data , action) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post(
        "http://localhost:3000/users/register",
        data,{
          headers:{
            Role:action
          }
        }
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
