import * as Yup from "yup";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
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
import { toggleEventDialog } from "../../store/action/uiActions";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DateRangePicker } from "materialui-daterange-picker";
import { DateRange } from "materialui-daterange-picker";
import DateRangeSharpIcon from "@material-ui/icons/DateRangeSharp";
import { withFormik } from "formik";
import { addEvent } from "../../store/action/eventActions";
const EventForm = (props) => {
  const [imgState, setImgState] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  //   const [dateRange, setDateRange] = React.useState < DateRange > {};
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => setOpen(!open);
  const fileChangeHandler = (event) => {
    console.log("event", event.target.files[0]);
    // setState(event.target.files[0]);

    setValues({
      ...values,
      file: event.target.files[0],
    });
    var reader = new FileReader();
    var url = reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = function (e) {
      setImgState(reader.result);
    };
  };
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    setErrors,
    setValues,
    setFieldValue,
  } = props;
  return (
    <div
      className="flex flex-col p-6 justify-center"
      style={{ width: "900px" }}
    >
      <div>
        <Typography variant="h5" className="text-center my-4 py-4">
          Add Event
        </Typography>
      </div>
      <div container className="flex flex-col justify-center ">
        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px", flex: "1" }}
            required
            // fullWidth
            id="event_title"
            name="event_title"
            label="Event Title"
            autoComplete="event_title"
            value={values.event_title}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            autoFocus
          />

          <FormControl className="flex-1">
            <InputLabel style={{ marginLeft: "20px" }}>
              Event Category
            </InputLabel>
            <Select
              style={{ marginLeft: "10px", marginRight: "10px", flex: "1" }}
              id="event_category"
              name="event_category"
              margin="dense"
              variant="outlined"
              value={values.event_category}
              required
              onChange={(event) => {
                if (event.target.value.trim().length == 0) {
                  setErrors({
                    ...errors,
                    event_category: "Field is required",
                  });
                } else {
                  setFieldValue("event_category", event.target.value);
                }
              }}
            >
              {/* {console.log("address_type",address_type)} */}
              <MenuItem value="Online">Online</MenuItem>
              <MenuItem value="Venue">Venue</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px" }}
            variant="outlined"
            fullWidth
            required
            id="short_description"
            name="short_description"
            label="Short Title Description"
            value={values.short_description}
            onChange={handleChange}
            onBlur={handleBlur}
            // fullWidth
          />
        </div>

        <div className="flex mt-4">
          <DateRangePicker
            // inputVariant="outlined"
            // id="date-picker-dialog"
            // label="Event Date"
            // name="event_date"
            open={open}
            toggle={toggle}
            // onChange={(range) => setDateRange(range)}
            onChange={(range) =>
              setValues({
                ...values,

                event_date: range,
              })
            }
          />
          {!open && (
            <Button
              style={{ marginLeft: "10px", marginRight: "10px" }}
              onClick={toggle}
            >
              <span>select event date</span>
              <DateRangeSharpIcon />
            </Button>
          )}
        </div>

        <div className="flex mt-4">
          {/* <MuiPickersUtilsProvider
            utils={MomentUtils}
    
          >
           
            <KeyboardTimePicker
              style={{ marginLeft: "10px", marginRight: "10px", flex: "1" }}
              inputVariant="outlined"
              id="time-picker"
              label="Time picker"
              value={values.event_time}
              onChange={(event) => {
                console.log("event", event);
                setValues({
                  ...values,
                  event_time: event,
                });
              }}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider> */}
        </div>
        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px" }}
            variant="outlined"
            fullWidth
            id="limit"
            name="limit"
            label="Limit"
            // fullWidth
            value={values.limit}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>

        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px" }}
            variant="outlined"
            fullWidth
            id="venue"
            name="venue"
            label="Venue"
            // fullWidth
            value={values.venue}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>

        <div className="flex mt-4">
          <FormControl className="flex-1">
            <InputLabel style={{ marginLeft: "20px" }}>Event Mode</InputLabel>
            <Select
              style={{ marginLeft: "10px", marginRight: "10px", flex: "1" }}
              id="event_mode"
              name="event_mode"
              margin="dense"
              variant="outlined"
              required
              onChange={(event) => {
                if (event.target.value.trim().length == 0) {
                  setErrors({
                    ...errors,
                    event_mode: "Field is required",
                  });
                } else {
                  setFieldValue("event_mode", event.target.value);
                }
              }}
            >
              {/* {console.log("address_type",address_type)} */}
              <MenuItem value="Free">Free</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
            </Select>
          </FormControl>

          <TextField
            style={{ marginLeft: "10px", marginRight: "10px", flex: "1" }}
            required
            // fullWidth
            id="price"
            name="price"
            label="Event Price"
            autoComplete="price"
            variant="outlined"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        {/* <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px" }}
            variant="outlined"
            fullWidth
            id="price"
            name="price"
            label="Price"
            // fullWidth
            required
          />
        </div> */}
        {/* 
        <div className="flex mt-4">
          <FormControl className="flex-1">
            <InputLabel style={{ marginLeft: "20px" }}>Event Mode</InputLabel>
            <Select
              style={{ marginLeft: "10px", marginRight: "10px" }}
              id="event_mode"
              name="event_mode"
              margin="dense"
              variant="outlined"
              required
            > */}
        {/* {console.log("address_type",address_type)} */}
        {/* <MenuItem value="Current">Free</MenuItem>
              <MenuItem value="Native">Paid</MenuItem>
            </Select>
          </FormControl>
        </div> */}

        <div className="flex mt-4">
          <TextField
            style={{ marginLeft: "10px", marginRight: "10px", flex: "1" }}
            variant="outlined"
            multiline
            rows={8}
            rowsMax={8}
            id="detail_description"
            name="detail_description"
            label="Event Description"
            value={values.detail_description}
            onChange={handleChange}
            onBlur={handleBlur}
            // fullWidth
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
            <Avatar
              src={`${imgState}`}
              style={{
                width: "200px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "50%",
              }}
              //   src={`data:image/jpg;base64,${
              //     props.editEmployeeData.displayImage
              //       ? props.editEmployeeData.displayImage
              //       : "https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop"
              //   }`}
              //   className="rounded-md ml-60 mt-12 w-96 h-96 "
            />
          </div>
        </div>

        <div className="flex p-8 justify-center items-center">
          <Button
            style={{
              alignItems: "center",
              justifyItems: "center",
            }}
            color="primary"
            // className="m-4"
            variant="contained"
            onClick={handleSubmit}
            // disabled={checkDisable()}
            // disabled={!dirty || isSubmitting || !isValid}
          >
            Add
          </Button>
          <Button
            color="primary"
            // className="m-4"
            style={{ margin: 5 }}
            variant="outlined"
            onClick={() => {
              props.toggleEventDialog();
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

const EnhancedEventForm = withFormik({
  enableReinitialize: false,
  mapPropsToValues: (props) => ({
    event_title: "",
    limit: "",
    short_description: "",
    venue: "",
    price: "",
    event_date: null,
    // event_time: null,
    detail_description: "",
    event_mode: "",
    event_category: "",
  }),
  validationSchema: (props) => Yup.object().shape({}),
  async handleSubmit(values, { props }) {
    try {
      console.log("values gg", values);
      await props.addEvent("", values);
    } catch (error) {}
  },
  displayName: "BasicForm",
})(EventForm);

const mapStateToProps = (state) => {
  return {
    eventDailog: state.ui.eventDailog,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleEventDialog,
      addEvent,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedEventForm);
