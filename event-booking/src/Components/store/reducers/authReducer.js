import * as Actions from "../action/authActions";

const intialState = {
  isLoggedIn: localStorage.getItem("authToken") ? true : false,
  userDetails: null,

};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return { ...state, isLoggedIn: true, userDetails: action.payload.user };
    default:
      return state;
    case Actions.REGISTER:

      return { ...state, isLoggedIn: true };
    
  }

};

export default authReducer;