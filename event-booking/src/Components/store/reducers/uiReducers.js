import {
    LOGIN,
    REGISTER
} from "../action/uiActions";

const intialState = {
    isLoggedIn: false,
};

const uiReducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log("check login reducer");
            return { ...state, isLoggedIn: true };
        default:
            return state;

            case REGISTER:
            console.log("check login reducer");
            return { ...state, isLoggedIn: true };
    }
};

export default uiReducer;
