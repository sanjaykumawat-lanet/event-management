import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import { mergeClasses } from "@material-ui/styles";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon
      >
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon
      >
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItem>
    <ListItem button>
      <ListItemIcon

      >
        <BarChartIcon />
      </ListItemIcon>

      <ListItemText primary="Users"
      />
    </ListItem>
  </div>
);


// import React from "react";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import PeopleIcon from "@material-ui/icons/People";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import { mergeClasses } from "@material-ui/styles";
// import { useHistory } from "react-router";


// const mainListItems =()=>{
//   let history = useHistory()

//   return <div>
//     <ListItem button onClick={()=>{
//       history.push("/organiser/dashboard/")
//     }}>
//       <ListItemIcon
       
//       >
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon
//       >
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Events" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon

//       >
//         <BarChartIcon />
//       </ListItemIcon>

//       <ListItemText primary="Users"
//       />
//     </ListItem>
//   </div>
// }

// export default mainListItems;