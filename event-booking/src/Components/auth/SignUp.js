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
import { register } from "../store/action/uiActions";
// import "./Login.css";
import { bindActionCreators } from "redux";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { IconButton } from "@material-ui/core";

const axios = require("axios");
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const BasicTextFields = (props) => {
  const { errors, touched, handleBlur, handleChange, values, handleSubmit, register } =
    props;
  const classes = useStyles();

  useEffect(function () {
    register();
  }, []);

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Enter name "),
  //   email: Yup.string().email().required("ENter"),
  //   password: Yup.string().required("ENter"),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: (props) =>
  //     Yup.object().shape({
  //       email: Yup.string().email("Enter valid email"),
  //     }),
  // });
  // console.log(formik.errors);
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const base_url = "http://localhost:3001/users/register";
  //   axios
  //     .post(base_url, values)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  //   // console.log(JSON.stringify(data));
  // };
  // console.log("errors", errors);
  const checkDisable = () => {
    if (errors.email || errors.name || errors.password) {
      return true;
    } else return false;
  };
  return (
    <>
      {/* <Header></Header> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "White",
            height: "70%",
            width: "50%",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography component="div">
          <Typography variant="h5" className={classes.title}>
            REGISTRATION
          </Typography>        

            <form className={classes.center} autoComplete="off">
              <div>
                <TextField
                  style={{ width: "80%" }}
                  error
                  id="name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  margin="dense"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  fullWidth
                  required
                />
              </div>
              <TextField
                style={{ width: "80%" }}
                error
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
                // error={formik.errors.email}
                onChange={handleChange}
                // value={formik.values.email}
                fullWidth
                required
              />
              {/* </div> */}
              {/* <div style={{ margin: "10px" }}> */}
              <TextField
                style={{ width: "80%" }}
                error
                id="password"
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
                required
                fullWidth   
              />
              
              {/* </div> */}
              <div style={{ margin: "15px" }}>
                <Button
                  style={{ width: "80%" }}
                  onClick={handleSubmit}
                  disabled={checkDisable()}
                  value="Submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                >
                  <LockTwoToneIcon />
                </Button>
              </div>
              <Link to="/SignIn" variant="body2">
                Existing Account ? Sign In here
              </Link>
            </form>
          </Typography>
        </div>
      </div>
    </>
  );
};
const Form = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    name: "",
    email: "",
    password: "",
  }),
  validationSchema: (props) =>
    Yup.object().shape({
      email: Yup.string().email("Enter valid email").required(),
      name: Yup.string().required("Enter valid name"),
      password: Yup.string().required("Enter valid password"),
    }),
  async handleSubmit(values, { props }) {
    const base_url = "http://localhost:3001/users/register";
    axios
      .post(base_url, values)
      .then((response) => {
        // props.register();
        props.history.push("/Login");
        console.log(values);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  displayName: "BasicForm",
})(BasicTextFields);

const mapStateToProps = (state) => {
    return {
      employeeList: state.ui.employeeList,
    };
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
