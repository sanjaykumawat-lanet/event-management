import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleOrganiserDialog } from "../store/action/uiActions";
import { addOrganiser } from "../store/action/organizerActions";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withFormik } from "formik";
const OrganiserForm = (props) => {
  const { errors, touched, handleBlur, handleChange, values, handleSubmit } =
    props;
  const [imgState, setImgState] = React.useState(null);

  const fileChangeHandler = (event) => {
    console.log("event", event.target.files[0]);
    // setState(event.target.files[0]);

    // setValues({
    //   ...values,
    //   file: event.target.files[0],
    // });
    var reader = new FileReader();
    var url = reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = function (e) {
      setImgState(reader.result);
    };
  };

  return (
    <div
      className="flex flex-col p-6 justify-center"
      style={{ width: "900px" }}
    >
      <div>
        <Typography variant="h5" className="text-center my-4 py-4">
          Add Organiser
        </Typography>
      </div>
      <div container className="flex flex-col justify-center ">
        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px", flex: "1" }}
            required
            // fullWidth
            id="first_name"
            name="first_name"
            label="First Name"
            variant="outlined"
            value={values.first_name}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.first_name && !!errors.first_name}
            helperText={touched.first_name && errors.first_name}
          />
        </div>

        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px" }}
            variant="outlined"
            fullWidth
            required
            id="last_name"
            name="last_name"
            label="Last Name"
            // fullWidth
            value={values.last_name}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.last_name && !!errors.last_name}
            helperText={touched.last_name && errors.last_name}
          />
        </div>

        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px", flex: "1" }}
            variant="outlined"
            id="phone"
            name="phone"
            label="Phone"
            required
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.phone && !!errors.phone}
            helperText={touched.phone && errors.phone}
          />
        </div>

        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px" }}
            variant="outlined"
            fullWidth
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
        </div>

        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px" }}
            variant="outlined"
            fullWidth
            required
            id="password"
            name="password"
            label="Password"
            // fullWidth
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
        </div>

        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px", flex: "1" }}
            variant="outlined"
            id="gender"
            name="gender"
            label="Gender"
            required
            value={values.gender}
            onBlur={handleBlur}
            onChange={handleChange}
            error={!!touched.gender && !!errors.gender}
            helperText={touched.gender && errors.gender}
          />
        </div>

        <div className="flex mt-4">
          <div className="ml-4">
            <Button
              style={{ marginRight: "8px" }}
              variant="contained"
              color="primary"
              startIcon={<CloudUploadIcon />}
              component="label"
            >
              Upload
              <input
                hidden
                id="file"
                label="file"
                type="file"
                name="file"
                onChange={fileChangeHandler}
              />
            </Button>
          </div>
          <div>
            {imgState == null && (
              <Avatar
              //   src={`data:image/jpg;base64,${
              //     props.editEmployeeData.displayImage
              //       ? props.editEmployeeData.displayImage
              //       : "https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop"
              //   }`}
              //   className="rounded-md ml-60 mt-12 w-96 h-96 "
              />
            )}
          </div>
        </div>

        <div className="flex p-8 justify-center items-center">
          <Button
            style={{
              alignItems: "center",
              justifyItems: "center",
             backgroundColor: "#800000"
            }}
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            // disabled={checkDisable()}
          >
            Add
          </Button>
          <Button
            color="primary"
            // className="m-4"
            style={{ margin: 5,
              backgroundColor: "#800000" }}
            variant="outlined"
            onClick={() => {
              props.toggleOrganiserDialog();
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
const EnhancedOrganiserForm = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    first_name: "",
    last_name: "",
    phone: "",
    gender: "",
    email: "",
    password: "",
  }),
  validationSchema: (props) =>
    Yup.object().shape({
      email: Yup.string().email("Enter valid email").required(),
      first_name: Yup.string().required("Enter valid first_name"),
      last_name: Yup.string().required("Enter valid last_name"),
      phone: Yup.string().required("Enter valid phone number"),
      gender: Yup.string().required("Enter valid last_name"),
      password: Yup.string().required("Enter valid password"),
    }),
  async handleSubmit(values, { props }) {
    try {
      await props.addOrganiser(null, values);
    } catch (error) {}
  },
  displayName: "BasicForm",
})(OrganiserForm);

const mapStateToProps = (state) => {
  return {
    organiserDialog: state.ui.organiserDialog,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleOrganiserDialog,
      addOrganiser,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedOrganiserForm);
