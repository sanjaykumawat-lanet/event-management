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
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon
      >
        <DashboardIcon />
      </ListItemIcon>
<<<<<<< HEAD
      <Link to ="/organiser/dashboard">
      <ListItemText primary="Dashboard" />
      </Link>
=======
      <ListItemText primary="Dashboard" />
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
    </ListItem>
    <ListItem button>
      <ListItemIcon
      >
        <PeopleIcon />
      </ListItemIcon>
<<<<<<< HEAD
      <Link to ="/organiser/event">
      <ListItemText primary="Events" />
      </Link>
=======
      <ListItemText primary="Events" />
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
    </ListItem>
    <ListItem button>
      <ListItemIcon

      >
        <BarChartIcon />
      </ListItemIcon>
<<<<<<< HEAD
      <Link to ="/organiser/user">
       <ListItemText primary="Users"/>
      </Link>
=======

      <ListItemText primary="Users"
      />
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
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

<<<<<<< HEAD
// export default mainListItems;
=======
// export default mainListItems;
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
