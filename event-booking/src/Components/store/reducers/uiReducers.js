import * as Actions from "../action/uiActions";

const intialState = {

  eventDailog: false,
  organiserDialog: false
};

const uiReducer = (state = intialState, action) => {
   switch (action.type) {
   case Actions.TOGGLE_EVENT_DIALOG:{
     return {
       ...state,
       eventDailog:!state.eventDailog
     }
   }   

   case Actions.TOGGLE_ORGANISER_DIALOG:{
    return {
      ...state,
      organiserDialog:!state.organiserDialog
    }
  }   
     
    default:
      return state;
   
    
  }

};

export default uiReducer;
