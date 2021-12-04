import axios from "axios";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
// export const EDIT_EMPLOYEE = "EDITEMPLOYEE";
// export const ADDEMPLOYEE = "ADDEMPLOYEE";
// export const SETLIST = "SETLIST";
// export const DELETE_ITEM = "DELETE_ITEM";

// export const setList = (data) => {
//   console.log("insde actino", data);
//   return {
//     type: SETLIST,
//     payload: data,
//   };
// };

// export const login = () => {
//   return {
//     type: LOGIN,
//   };
// };

export const getAuthToken = () => {
  return "Bearer " + localStorage.getItem("Token");
};

export const checkLogin = () => {
  return async (dispatch) => {
    if (localStorage.getItem("token")) {
      console.log("check login if");
      dispatch({
        type: LOGIN,
      });
    }
  };
};


export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      let token = resp.data.token;
      localStorage.setItem("token", token);
      if (resp.status === 200) {
        dispatch({
          type: LOGIN,
        });
        return resp.status;
      }
    } catch (error) {}
  };
};

export const register = (email, password) => {
    return async (dispatch) => {
      try {
        const resp = await axios.post("http://localhost:3001/users/register", {
          email,
          password,
        });
        let token = resp.data.token;
        localStorage.setItem("token", token);
        if (resp.status === 200) {
          dispatch({
            type: REGISTER,
          });
          return resp.status;
        }
      } catch (error) {}
    };
  };

// export const addemployee = ({
//   email,
//   phone,
//   name,
//   dob,
//   gender,
//   join_date,
//   department,
//   salary,
//   country,
//   state,
//   district,
//   zip_code,
// }) => {
//   return async (dispatch) => {
//     try {
//       console.log("Add employee");
//       const resp = await axios.post("http://localhost:3001/employee/add", {
//         email,
//         name,
//         phone,
//         dob,
//         gender,
//         join_date,
//         department,
//         salary,
//         country,
//         state,
//         district,
//         zip_code,
//       });

//       if (resp.status === 200) {
//         console.log("resp", resp);
//         dispatch({
//           type: ADDEMPLOYEE,
//           // payload:resp.data.emp
//           payload: { ...resp.data.emp, ...resp.data.empDetail },
//         });
//         return true;
//       } else {
//         return false;
//       }
//     } catch (error) {}
//   };
// };

// export const editemployee = (
//   id,
//   {
//     name,
//     email,
//     phone,
//     dob,
//     gender,
//     join_date,
//     department,
//     salary,
//     country,
//     state,
//     district,
//     zip_code,
//   }
// ) => {
//   return async (dispatch) => {
//     try {
//       const resp = await axios.put(`http://localhost:3001/employee/${id}`, {
//         name,
//         email,
//         phone,
//         dob,
//         gender,
//         join_date,
//         department,
//         salary,
//         country,
//         state,
//         district,
//         zip_code,
//       });
//       console.log("resp", resp);
//       if (resp.status === 200) {
//         dispatch({
//           type: EDIT_EMPLOYEE,
//           payload: { ...resp.data.updatedDetail, ...resp.data.updatedEmp },
//         });
//       }
//     } catch (error) {}
//   };
// };
