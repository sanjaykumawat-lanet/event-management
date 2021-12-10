import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon style={{ color: "#263238" }}>
        <DashboardIcon />
      </ListItemIcon>
      <Link to ="/admin/dashboard">
      <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: "#263238" }}>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to ="/admin/organiser">
      <ListItemText primary="Organisers" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: "#263238" }}>
        <PeopleIcon />
      </ListItemIcon>
      <Link to ="/admin/event">
      <ListItemText primary="Events" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: "#263238" }}>
        <PeopleIcon />
      </ListItemIcon>
      <Link to ="/admin/user">
      <ListItemText primary="Users" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: "#263238" }}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon style={{ color: "#263238" }}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: "#263238" }}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ color: "#263238" }}>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
// );
// import React from "react";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import PeopleIcon from "@material-ui/icons/People";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import LayersIcon from "@material-ui/icons/Layers";
// import AssignmentIcon from "@material-ui/icons/Assignment";

// export const mainListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon style={{ color: "#800000" }}>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon style={{ color: "#800000" }}>
//         <ShoppingCartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Organisers" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon style={{ color: "#800000" }}>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Events" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon style={{ color: "#800000" }}>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Users" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon style={{ color: "#800000" }}>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItem>
//   </div>
// );

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon style={{ color: "#263238" }}>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon style={{ color: "#263238" }}>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon style={{ color: "#263238" }}>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
);
