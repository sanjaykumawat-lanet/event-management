import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { Button, Menu, MenuItem } from '@material-ui/core';
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Card from "./Card"
import LockOpen from '@material-ui/icons/LockOpen';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Slider from '../Ui/slider'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppBar = (props) => {
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
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Event Booking
          </Typography>
          {isLoggedIn && (
            <Button
              style={{ margin: "0 10px" }}
              variant="contained"
              onClick={handleClickOpen}
            >
              <PersonAddTwoToneIcon />
            </Button>
          )}
          {!isLoggedIn && (
            <Button
            color="inherit"
            // href="/SignIn"
            onClick={()=> props.history.push("/SignIn")}
            >
            <IconButton
            color="inherit"
            >
              <LockOpen />
              </IconButton>
              SignIn
            </Button>

          )}
          {!isLoggedIn && (
            <Button
            color="inherit"
            // href="/SignUp"
            onClick={()=> props.history.push("/SignUp")}>
            <IconButton
            color="inherit"
            >
              <LockOutlinedIcon />
              
              </IconButton>
              SignUp
              </Button>
          )}
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
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
      <div className="m-8">
      <Slider />
      </div>
      <Card />
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.ui.isLoggedIn,
    };
  };
  export default withRouter(connect(mapStateToProps, null)(MenuAppBar));