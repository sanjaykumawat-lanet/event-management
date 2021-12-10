<<<<<<< HEAD
import * as Actions from "../action/organizerActions";

const intialState = {
  orgList: [],
};

const organiserReducer = (state = intialState, action) => {
  switch (action.type) {
    case Actions.ADD_ORGANISER: {
      return {
        ...state,
        orgList: state.orgList.concat({ ...action.payload.organizer }),
      };
    }

    default:
      return state;
  }
};

export default organiserReducer;
=======
import * as Actions from "../action/organizerActions";

const intialState = {
  orgList: [],
};

const organiserReducer = (state = intialState, action) => {
  switch (action.type) {
    case Actions.ADD_ORGANISER: {
      return {
        ...state,
        orgList: state.orgList.concat({ ...action.payload.organizer }),
      };
    }

    default:
      return state;
  }
};

export default organiserReducer;
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
