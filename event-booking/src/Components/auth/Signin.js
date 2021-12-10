import * as Yup from "yup";
import React from "react";
import { withFormik } from "formik";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { login } from "../store/action/authActions";

import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";
import "react-toastify/dist/ReactToastify.css";
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  CssBaseline,
  Grid,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const TextFields = (props) => {
  const { errors, touched, handleBlur, handleChange, values, handleSubmit } =
    props;
  const classes = useStyles();
  console.log("props", props);

  const checkDisable = () => {
    if (errors.email || errors.password) {
      return true;
    } else return false;
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div style={{ color: "red" }}>
            {errors.error && <div>{errors.error}</div>}
          </div>
          <form className={classes.form} autoComplete="off">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onBlur={handleBlur}
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              onChange={handleChange}
              autoFocus
            />
            {/* <TextField
                style={{ width: "80%" }}
                error
                id="email"
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                fullWidth
                required
              /> */}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              error={!!touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              autoComplete="current-password"
            />
            {/* <TextField
                style={{ width: "80%" }}
                id="password"
                name="password"
                label="Password"
                type="password"
                requiredlabel="Password"
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                fullWidth
                required
              /> */}
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submit}
              // disabled={checkDisable}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="user/SignIn" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={8}>
        <Copyright />
      </Box> */}
        {/* </Container> */}
      </Grid>
    </Grid>
  );
};

const Form = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    password: "",
    email: "",
  }),

  validationSchema: (props) =>
    Yup.object().shape({
      email: Yup.string().email("Enter valid email").required(),
      password: Yup.string().required("Enter valid password"),
    }),

  async handleSubmit(values, { props, setErrors }) {
    try {
      const resp = await props.login(values.email, values.password);
      if (resp.status === 200) {
        console.log("Resposne", resp, resp.data.user.role);
        if (resp.data.user.role === "ADMIN") {
          props.history.push("/admin/dashboard");
        }
      }
    } catch (error) {}
  },
  displayName: "BasicForm",
})(TextFields);

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login,
    },
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
