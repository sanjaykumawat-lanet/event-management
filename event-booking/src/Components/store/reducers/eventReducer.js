import * as Actions from "../action/eventActions";

const intialState = {
  events: [],
  categories: [],
};

const eventReducer = (state = intialState, action) => {
  switch (action.type) {
    case Actions.ALL_EVENTS: {
      return {
        ...state,
        events: action.payload.events,
      };
    }
    case Actions.ADD_EVENT: {
      return {
        ...state,
        events: state.events.concat({ ...action.payload.event }),
      };
    }
    case Actions.EVENT_IMAGE_UPLOAD: {
      return {
        ...state,
        events: state.events.map((event) =>
          event._id === action.payload.event_id
            ? { ...event, display_image: action.payload.display_image }
            : event
        ),
      };
    }
    default:
      return state;
  }
};

export default eventReducer;
