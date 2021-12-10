import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { Button, InputBase, Menu, MenuItem } from "@material-ui/core";
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";
import LockOpen from "@material-ui/icons/LockOpen";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Slider from "../Ui/slider";
import SearchIcon from "@material-ui/icons/Search";
import EventAvailableSharpIcon from "@material-ui/icons/EventAvailableSharp";
<<<<<<< HEAD
import { useHistory } from "react-router";
=======

>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 333,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
<<<<<<< HEAD
    color: "black  ",
=======
    color:"black  "
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
  },
  inputRoot: {},
  customColor: {
    backgroundColor: "#ffffff",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
      // marginLeft: "50px"
    },
  },
  customPos: {
    position: "sticky",
    top: "0",
  },
}));

const MenuAppBar = (props) => {
<<<<<<< HEAD
  let history = useHistory();

=======
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  //   const open = Boolean(anchorEl);
  const [open, setOpen] = React.useState(false);
  //   const classes = useStyles();
  const { isLoggedIn } = props;

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleClick = () => {
  //   history.push("/home");
  // }

  const handleLogOut = () => {
    localStorage.setItem("userToken", "");
    localStorage.clear();
    window.location.href = "/Login";
    // history.push("/Login"); // whichever component you want it to route to
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        // className={classes.customPos}
      >
        <Toolbar className={classes.customColor}>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}

<<<<<<< HEAD
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: "black" }}
          >
=======
          <Typography variant="h6" className={classes.title} style={{color:"black"}}>
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
            <EventAvailableSharpIcon /> Event Booking
          </Typography>
          {/* <Typography variant="h6">Blog</Typography> */}
          <div className="shadow-2xl bg-white-900 border rounded-lg">
<<<<<<< HEAD
            <div className={classes.search} style={{ boxShadow: "10px" }}>
              <div className={classes.searchIcon} style={{ boxShadow: "50px" }}>
                <SearchIcon />
              </div>
              <InputBase
                style={{ boxShadow: "50px" }}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          {isLoggedIn && (
            <Button
              style={{ margin: "0 10px", color: "black" }}
=======
          <div className={classes.search} style={{boxShadow:"10px"}}>
            <div className={classes.searchIcon} style={{boxShadow:"50px"}} >
              <SearchIcon />
            </div>
            <InputBase
             style={{boxShadow:"50px"}}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          </div>
          {isLoggedIn && (
            <Button

              style={{ margin: "0 10px", color:"black" }}
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
              variant="contained"
              onClick={handleClickOpen}
            >
              <PersonAddTwoToneIcon />
            </Button>
          )}
<<<<<<< HEAD

          <Button
            style={{ color: "black" }}
            color="primary"
            // href="/SignIn"
            onClick={() => history.push("/signin")}
          >
            <IconButton color="inherit">
              <LockOpen />
            </IconButton>
            SignIn
          </Button>

          <Button
            style={{ color: "black" }}
            color="inherit"
            // variant="contained"
            // href="/SignUp"
            onClick={() => history.push("/signup")}
          >
            <IconButton color="inherit">
              <LockOutlinedIcon />
            </IconButton>
            SignUp
          </Button>

=======
          {!isLoggedIn && (
            <Button
            style={{ color:"black" }}
              color="primary"
              // href="/SignIn"
              onClick={() => props.history.push("/SignIn")}
            >
              <IconButton color="inherit">
                <LockOpen />
              </IconButton>
              SignIn
            </Button>
          )}
          {!isLoggedIn && (
            <Button
            style={{ color:"black" }}
              color="inherit"
              // variant="contained"
              // href="/SignUp"
              onClick={() => props.history.push("/SignUp")}
            >
              <IconButton color="inherit">
                <LockOutlinedIcon />
              </IconButton>
              SignUp
            </Button>
          )}
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
          {isLoggedIn && (
            <Button
              style={{ margin: "0 10px" }}
              color="secondary"
              variant="contained"
              onClick={handleLogOut}
            >
              <ExitToAppTwoToneIcon />
            </Button>
          )}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(MenuAppBar);
