import axios from "axios";
 
export const TOGGLE_EVENT_DIALOG = "TOGGLEEVENTDIALOG";
export const TOGGLE_ORGANISER_DIALOG ="TOGGLE_ORGANISER_DIALOG"
export const SETLIST ="SETLIST"


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

  export const getAllUsers = (limit=5, skip=0) => {
    return async (dispatch, getState) => {
      try {
        debugger
        const state = getState();
        // const skip = state.demo.employeeList.length;
        // console.log("skip", skip);
        // const q = state.demo.search;
        // console.log("qq",q)
        const resp = await axios.post(
          `http://localhost:3000/users/allusers`, {
            limit,
            skip   
          }
        );
        console.log("resposn gge", resp);
        if (resp.status === 200) {
          dispatch({
            type: SETLIST,
            payload: {
              users:resp.data.useritems,
              searchfilterrec : resp.data.searchfilterrec,
              totalRecords:resp.data.totalRecords,
            }
            // payload: { ...resp.data },
          });
        }
        return resp.data.users;
      } catch (error) {console.log("====error",error)}
    };
  };

  // export const getAllUsers = () => {
  //   return async (dispatch) => {
  //     try {
  //       const resp = await axios.get("http://localhost:3000/users/allusers");
  //       dispatch({
  //         type: SETLIST,
  //         payload: resp.data.users,
  //       });
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  // };
  



//   console.log("resposn gge", resp);
//   if (resp.status === 200) {
//     dispatch({
//       type: SETLIST,
//       payload: {
//         users:resp.data.userItem,
//         searchfilterrec : resp.data.searchfilterrec,
//         totalRecords:resp.data.totalRecords,
//       }
//       // payload: { ...resp.data },
//     });
//   }
//   return resp.data.users;
// } catch (error) {}