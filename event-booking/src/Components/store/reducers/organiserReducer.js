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
