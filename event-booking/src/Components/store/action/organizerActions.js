import axios from "axios";
export const ADD_ORGANISER = "ADDORGANISER";

export const addOrganiser = (adminId, data) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post(
        "http://localhost:3000/organiser/add",
        data
      );
      if (resp.status === 201) {
        dispatch({
          type: ADD_ORGANISER,
          payload: resp.data,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
