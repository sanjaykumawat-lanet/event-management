// const Dashboard = () => {
//   return <div>Dashboard component works !</div>;
// };

// export default Dashboard;

import React from "react";
import clsx from "clsx";
import { useEffect } from "react";
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
import { mainListItems, secondaryListItems } from "./Listitems";
// import Chart from "./Chart";
import Custompanel from "./Custompanel";
import User from "./Userlist";
import { Button, ListItemIcon, ListItemText } from "@material-ui/core";
import { toggleOrganiserDialog, getAllUsers } from "../store/action/uiActions";
import { getThemeProps } from "@material-ui/styles";
import SimpleDialog from "../Ui/SimpleDialog";
import OrganiserForm from "../Organisers/OrganiserForm";
import SimpleDrawer from "../Ui/SimpleDrawer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Chart from "./Chart";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
    // color:"black",
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
    boxShadow:"1px, 2px, 5px, grey"
  },
  fixedHeight: {
    height: 210,
    boxShadow:"1px, 2px, 5px, grey"
  },
}));

const Dashboard = (props) => {
  const {
    getAllUsers
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOrganiserClick = () => {
    props.toggleOrganiserDialog();
  };
  useEffect(() => {
    getAllUsers(5,0);
  }, []);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
        <ListItemIcon style={{ color: "#263238", marginLeft:"10px"}}> */}
        {/* <DashboardIcon /> */}
      {/* </ListItemIcon>
      <ListItemText style={{fontWeight:"thick" }} primary="Dashboard" />
    
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer> */}

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <div className="flex justify-end mr-4">
            <Button
              // style={{ backgroundColor: "#f2f2f2" }}
              color="primary"
              variant="contained"
              onClick={handleOrganiserClick}
            >
              Add Organiser
            </Button>
          </div>
          <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3} style={{boxShadow:"1px, 2px, 5px, grey" , }}>
              <Paper className={fixedHeightPaper} style={{boxShadow: "5px 3px 10px grey", borderRadius:"10px"}}>
         <Typography component="p" variant="h4">
        Organiser
      </Typography> 
      <Typography component="p" variant="h5" style={{marginTop:"10px", justifyItems:"center", alignItems:"center"}}>
        456
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 9 December, 2021
      </Typography>
      <div>
        <Button color="primary" variant="contained" style={{top:"40px", textTransform: 'unset'}} href="#" >
          View Organiser
        </Button>
      </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} style={{boxShadow: "5px 3px 10px grey", borderRadius:"10px"}}>
              <Typography component="p" variant="h4">
        Events
      </Typography> 
      <Typography component="p" variant="h5" style={{marginTop:"10px", justifyItems:"center", alignItems:"center"}}>
        456
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 9 December, 2021
      </Typography>
      <div>
        <Button color="primary"  variant="contained" style={{top:"40px", textTransform: 'unset'}} href="#" >
          View Events
        </Button>
      </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper} style={{boxShadow: "5px 3px 10px grey", borderRadius:"10px"}}>
              <Typography component="p" variant="h4">
                  
        Users
        
      </Typography> 
      <Typography component="p" variant="h5" style={{marginTop:"10px", justifyItems:"center", alignItems:"center"}}>
        456
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 9 December, 2021
      </Typography>
      <div>
        <Button color="primary" variant="contained" style={{top:"40px", textTransform: 'unset'}} href="#" >
          View Users  
        </Button>
      </div>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
                <User />
              </Paper>
            </Grid> */}
          </Grid>
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
        <SimpleDrawer open={props.organiserDialog}>
          <OrganiserForm />
        </SimpleDrawer>
        <Chart />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    organiserDialog: state.ui.organiserDialog,
    userList:state.ui.userList
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleOrganiserDialog,
      getAllUsers
    },
    dispatch
  );
  // return {
  //   setEmployeeList: (data) => dispatch(login(data)),
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
