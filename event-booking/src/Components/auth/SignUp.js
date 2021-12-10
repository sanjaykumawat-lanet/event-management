<<<<<<< HEAD
import * as Yup from "yup";
import React, { useEffect } from "react";
import { withFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../store/action/authActions";
// import "./Login.css";
import { bindActionCreators } from "redux";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import {
  Avatar,
  Checkbox,
  Container,
  CssBaseline,
  Grid,
  IconButton,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const axios = require("axios");
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = (props) => {
  const { errors, touched, handleBlur, handleChange, values, handleSubmit } =
    props;
  const classes = useStyles();

  const checkDisable = () => {
    if (errors.email || errors.first_name || errors.password || errors.lname) {
      return true;
    } else return false;
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.center} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="first_name"
                id="first_name"
                label="First Name"
                name="first_name"
                variant="outlined"
                margin="dense"
                value={values.first_name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.first_name && !!errors.first_name}
                helperText={touched.first_name && errors.first_name}
                autoFocus
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="last_name"
                id="last_name"
                label="Last Name"
                name="last_name"
                variant="outlined"
                margin="dense"
                value={values.last_name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.last_name && !!errors.last_name}
                helperText={touched.last_name && errors.last_name}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="dense"
                value={values.email}
                onBlur={handleBlur}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="phone"
                id="phone"
                name="phone"
                label="Phone"
                // type="email"
                variant="outlined"
                margin="dense"
                value={values.phone}
                onBlur={handleBlur}
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                required
                fullWidth
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Accept."
              /> */}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Typography component="h1" variant="h5" style={{alignItems:"center", justifyContent:"center"}}>
          or
        </Typography>
            <Grid item>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
           Sign Up as Organiser 
          </Button>
          <Grid container justifyContent="flex-end">
              <Link href="admin/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const Form = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone:""
  }),
  validationSchema: (props) =>
    Yup.object().shape({
      email: Yup.string().email("Enter valid email").required(),
      first_name: Yup.string().required("Enter valid first_name"),
      last_name: Yup.string().required("Enter valid last_name"),
      password: Yup.string().required("Enter valid password"),
      phone: Yup.string().required("Enter valid password"),
    }),
  async handleSubmit(values, { props }) {
    try {
      await props.register(values, "ORGANISER");
      props.history.push("/admin/signin");
    } catch (error) {}
  },
  displayName: "BasicForm",
})(Signup);

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      register,
    },
    dispatch
  );
  // return {
  //   setEmployeeList: (data) => dispatch(login(data)),
  // };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

// export default BasicTextFields;
=======
import * as Yup from "yup";
import React, { useEffect } from "react";
import { withFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../store/action/authActions";
// import "./Login.css";
import { bindActionCreators } from "redux";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import {
  Avatar,
  Checkbox,
  Container,
  CssBaseline,
  Grid,
  IconButton,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const axios = require("axios");
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = (props) => {
  const { errors, touched, handleBlur, handleChange, values, handleSubmit } =
    props;
  const classes = useStyles();

  const checkDisable = () => {
    if (errors.email || errors.first_name || errors.password || errors.lname) {
      return true;
    } else return false;
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.center} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="first_name"
                id="first_name"
                label="First Name"
                name="first_name"
                variant="outlined"
                margin="dense"
                value={values.first_name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.first_name && !!errors.first_name}
                helperText={touched.first_name && errors.first_name}
                autoFocus
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="last_name"
                id="last_name"
                label="Last Name"
                name="last_name"
                variant="outlined"
                margin="dense"
                value={values.last_name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.last_name && !!errors.last_name}
                helperText={touched.last_name && errors.last_name}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="dense"
                value={values.email}
                onBlur={handleBlur}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                required
                fullWidth
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Accept."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="admin/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const Form = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  }),
  validationSchema: (props) =>
    Yup.object().shape({
      email: Yup.string().email("Enter valid email").required(),
      first_name: Yup.string().required("Enter valid first_name"),
      last_name: Yup.string().required("Enter valid last_name"),
      password: Yup.string().required("Enter valid password"),
    }),
  async handleSubmit(values, { props }) {
    try {
      await props.register(values);
      props.history.push("/admin/signin");
    } catch (error) {}
  },
  displayName: "BasicForm",
})(Signup);

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      register,
    },
    dispatch
  );
  // return {
  //   setEmployeeList: (data) => dispatch(login(data)),
  // };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

// export default BasicTextFields;
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
