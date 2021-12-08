import axios from "axios";
 
export const TOGGLE_EVENT_DIALOG = "TOGGLEEVENTDIALOG";
export const TOGGLE_ORGANISER_DIALOG ="TOGGLE_ORGANISER_DIALOG"


export const toggleEventDialog = ()=>{
return async (dispatch) =>{
   dispatch({
     type:TOGGLE_EVENT_DIALOG
   })
}
}

export const toggleOrganiserDialog = ()=>{
  return async (dispatch) =>{
     dispatch({
       type:TOGGLE_ORGANISER_DIALOG
     })
  }
  }
