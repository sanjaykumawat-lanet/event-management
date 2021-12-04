import * as Yup from "yup";
import React from "react";
import { withFormik } from "formik";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import axios from "axios";
import { connect } from "react-redux";
import { login } from "../store/action/uiActions";
// import "./Login.css";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";
import "react-toastify/dist/ReactToastify.css";

// import { login } from "./store/actions/uiActions";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  title: {
    flexGrow: 1,
  },
}));

const TextFields = (props) => {
  const { errors, touched, handleBlur, handleChange, values, handleSubmit,login } =
    props;
  const classes = useStyles();
  // console.log(errors);
  useEffect(function () {
    login();
  }, []);

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //   },
  //   // onSubmit: (values) => {
  //   //   alert(JSON.stringify(values, null, 2));
  //   // },
  // });
  // const handleSubmit = (evt) => {
  //   const base_url = "http://localhost:3001/users/login";
  //   axios
  //     .post(base_url, formik.values)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  //   login();
  //   // console.log(JSON.stringify(data));
  // };

  const checkDisable = () => {
    if (errors.email || errors.name || errors.password) {
      return true;
    } else return false;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          textAlign: "center",
          transition:"step-start"
        }}
      >
        {/* <Header></Header> */}
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
          <Typography
            component="div"
            // style={{
            //   backgroundColor: "rgb(208, 214, 218)",
            //   height: "250px",
            //   padding: "15%",
            //   margin: "2rem auto",
            //   width: "370px",
            //   color: "black",
            //   borderRadius: "20px",
            // }}
          >
              <Typography variant="h5" className="pb-16">
            LOGIN
          </Typography>
            <div style={{ color: "red" }}>
              {errors.error && <div>{errors.error}</div>}
            </div>
            <form
              // className={classes.root}
              className={classes.center}
              autoComplete="off"
            >
              <TextField
                style={{ width: "80%" }}
                error
                id="email"
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onBlur={handleBlur}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                // error={formik.errors.email}
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                // value={formik.values.email}
                fullWidth
                required
              />

              <TextField
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
              />
              <div style={{ margin: "15px" }}>
                <Button
                  style={{ width: "60%" }}
                  onClick={handleSubmit}
                  disabled={checkDisable()}
                  value="Submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth
                >
                  {/* Login */}
                  <LockOpenTwoToneIcon />
                </Button>
              </div>
              <Link to="/SignUp" variant="body2">
                Not have an Account ? Sign up here
              </Link>
              {/* or
                <Button
                  style={{ margin: "0 10px" }}
                  href="Addemployee"
                  variant="contained"
                >
                  Add User
                </Button> */}
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
  }),
  validationSchema: (props) =>
    Yup.object().shape({
      email: Yup.string().email("Enter valid email").required(),
      password: Yup.string().required("Enter valid password"),
    }),
  async handleSubmit(values, { props, setErrors }) {
    // console.log("props", props);
    // const base_url = "http://localhost:3001/users/login";
    // axios
    //   .post(base_url, values)
    //   .then((response) => {
    //   //   let token = response.data.token;
    //   //   localStorage.setItem("token", token);
    //   //   props.login();
    //   //   console.log(response);
    //   //   props.history.push("/List");
    //   // })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
    const resp = await props.login(values.email, values.password);
    if (resp === 200) {
      props.history.push("/List");
      return true;
    } else {
      setErrors({
        error: "Invalid Credentials!",
      });
      return false;
    }
  },
  displayName: "BasicForm",
})(TextFields);

// const mapStateToProps = (state) => {
//   return {
//     employeeList: state.ui.employeeList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       getAllEmployees,
//     },
//     dispatch
//   );
//   // return {
//   //   // setEmployeeList: (data) => dispatch(setList(data)),
//   // };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ListDividers);

const mapStateToProps = (state) => {
  return {
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login,
    },
    dispatch
  );
  // return {
  //   setEmployeeList: (data) => dispatch(login(data)),
  // };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));

// let token = response.data.token;
// localStorage.setItem("token", token);
