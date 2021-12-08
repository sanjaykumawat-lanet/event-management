

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems } from "./Listitems";
// import Chart from "./Chart";
import Custompanel from "./Custompanel";
import Userlist from "./Userlist";
import { Button } from "@material-ui/core";
import { toggleEventDialog } from "../store/action/uiActions";
import { connect } from "react-redux";
import SimpleDialog from "../Ui/SimpleDialog";
import EventForm from "../shared/Events/EventForm";
import { bindActionCreators } from "redux";
import SimpleDrawer from "../Ui/SimpleDrawer";
import Chart from "./Chart";
import Events from "./Eventslist";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#800000",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: "#800000",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    // color:"#800000"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  customColor: {
    backgroundColor: "#800000",
  },
}));

const Dashboard = (props) => {
  const contentComponent  = props.match.params.subComponent
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleEventClick = () => {
    props.toggleEventDialog();
  };
  const handleOnclose = () => {
    props.toggleEventDialog();
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const renderContent = () => {
    console.log("conentComponent: ", contentComponent)
    switch (contentComponent) {
      case "dashboard":
        return <div style={{
          display: "flex",
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
         
        }}>dashboard</div>
      case "event":
        return <div><Events /></div>
        case "user":
        return <div><Userlist /></div>
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Organiser
          </Typography>

        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{ }</List>
      </Drawer>
      <main className={classes.content}>
        {renderContent()}
      </main>

      {/* // code for simple dialog */}
      <SimpleDrawer open={props.eventDailog}>
        <EventForm />
      </SimpleDrawer>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    eventDailog: state.ui.eventDailog,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleEventDialog,
    },
    dispatch
  );
  // return {
  //   setEmployeeList: (data) => dispatch(login(data)),
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);




// // const Dashboard = () => {
// //   return <div>Dashboard component works !</div>;
// // };

// // export default Dashboard;

// import React from "react";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Drawer from "@material-ui/core/Drawer";
// import Box from "@material-ui/core/Box";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Link from "@material-ui/core/Link";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import { mainListItems } from "./Listitems";
// // import Chart from "./Chart";
// import Custompanel from "./Custompanel";
// import Userlist from "./Userlist";
// import { Button } from "@material-ui/core";
// import { toggleEventDialog } from "../store/action/uiActions";
// import { connect } from "react-redux";
// import SimpleDialog from "../Ui/SimpleDialog";
// import EventForm from "../shared/Events/EventForm";
// import { bindActionCreators } from "redux";
// import SimpleDrawer from "../Ui/SimpleDrawer";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     backgroundColor: "#800000",
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     backgroundColor: "#800000",
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: "none",
//   },
//   title: {
//     flexGrow: 1,
//   },
//   drawerPaper: {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: "hidden",
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9),
//     },
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: "100vh",
//     overflow: "auto",
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column",
//   },
//   fixedHeight: {
//     height: 240,
//   },
//   customColor: {
//     backgroundColor: "#800000",
//   },
// }));

// const Dashboard = (props) => {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const handleEventClick = () => {
//     props.toggleEventDialog();
//   };
//   const handleOnclose = () => {
//     props.toggleEventDialog();
//   };
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="absolute"
//         className={clsx(classes.appBar, open && classes.appBarShift)}
//       >
//         <Toolbar className={classes.toolbar}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             className={clsx(
//               classes.menuButton,
//               open && classes.menuButtonHidden
//             )}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             component="h1"
//             variant="h6"
//             color="inherit"
//             noWrap
//             className={classes.title}
//           >
//             Organiser
//           </Typography>
//           <IconButton color="inherit">
//             <Badge badgeContent={4} color="secondary">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         variant="permanent"
//         classes={{
//           paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//         }}
//         open={open}
//       >
//         <div className={classes.toolbarIcon}>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <List>{mainListItems}</List>
//         <Divider />
//         <List>{}</List>
//       </Drawer>
//       <main className={classes.content}>
//         <div className="flex justify-end mt-4 mr-4">
//           <Button
//             style={{ backgroundColor: "#263238" }}
//             color="primary"
//             variant="contained"
//             onClick={handleEventClick}
//           >
//             Add Event
//           </Button>
//         </div>
//         {/* <div className={classes.appBarSpacer} /> */}
//         <Container maxWidth="lg" className={classes.container}>
//           <Grid container spacing={3}>
//             {/* Recent Deposits */}

//             <Grid item xs={12} md={4} lg={3}>
//               <Paper className={fixedHeightPaper}>
//                 <Custompanel title="Events" count={3} actionText="Event Count" />
//               </Paper>
//             </Grid>
//             <Grid item xs={12} md={4} lg={3}>
//               <Paper className={fixedHeightPaper}>
//                 <Custompanel title="Users" count={3} actionText="User Count" />
//               </Paper>
//             </Grid>
//             {/* Recent Orders */}
//             <Grid item xs={12}>
//               <Paper className={classes.paper}>
//                 <Userlist />
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       </main>

//       {/* // code for simple dialog */}
//       <SimpleDrawer open={props.eventDailog}>
//         <EventForm />
//       </SimpleDrawer>
//     </div>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     eventDailog: state.ui.eventDailog,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       toggleEventDialog,
//     },
//     dispatch
//   );
//   // return {
//   //   setEmployeeList: (data) => dispatch(login(data)),
//   // };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// const Dashboard = () => {
//   return <div>Dashboard component works !</div>;
// };

// export default Dashboard;
