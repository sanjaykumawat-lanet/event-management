import * as Actions from "../action/uiActions";

const intialState = {
  userList:[],
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
  case Actions.SETLIST: {
    console.log("acition payload", action.payload.users);
    return {
      ...state,
      // employeeList: action.payload.searchText || action.payload.sortQuery,
      userList: action.payload.users,
      // searchfilterrec : state.search ?   action.payload.searchfilterrec : action.payload.totalRecords,
      // totalRecords :  state.search ?    state.totalRecords : action.payload.totalRecords,
      // searchfilterrec : action.payload.searchfilterrec,
      // totalRecords : action.payload.totalRecords,
    };
  }
  default:
    return state;
   
    
  }

};

export default uiReducer;
