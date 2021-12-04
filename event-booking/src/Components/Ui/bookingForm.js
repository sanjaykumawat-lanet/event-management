import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useEffect } from "react";
import { Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 500,
  },
  fullList: {
    width: "auto",
  },
  drawer: {
    width: "500",
  },
  height: {
    maxheight: "44rem",
  },
}));

const New = (props) => {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    open,
    onClose,
    setValues,
    reset
  } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [imgState, setImgState] = React.useState(
    null
  );


  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  // const handleClose = () => {
  //   props.onClose();
  // };

  const fileChangeHandler = (event) => {
    console.log("event", event.target.files[0]);
    // setState(event.target.files[0]);

    setValues({
      ...values,
      file: event.target.files[0],
    });
    var reader = new FileReader();
    var url = reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = function(e) {
      setImgState(reader.result);
    };
  };

  
  useEffect(() => {
    // addemployee();
    // editemployee();
  }, []);

  // const checkDisable = () => {
  //   if (
  //     errors.email ||
  //     errors.first_name ||
  //     errors.last_name ||
  //     errors.password ||
  //     errors.phone ||
  //     errors.join_date ||
  //     errors.department ||
  //     errors.dob
  //   ) {
  //     return true;
  //   } else return false;
  // };
  return (
    <div>
      {/* <div className="flex w-full px-8 sm:px-16 bg-grey-300 justify center items-center overflow-hidden">
        <h1>
          {props.editEmployeeData?._id ? "Edit Employee" : "Add Employee"}
        </h1>
      </div> */}
      <form
        onSubmit={handleSubmit}
        // className="overflow-auto " 
        // className="mt-20 mr-20 mb-20 ml-20 p-25 overflow-auto flex flex-1 justify center flex-wrap mb-4 w-full px-16 py-8 max-h-512"
        // className={classes.height}
      >
        {/* <div className="flex ">
          <Button
            className="ml-48 "
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
            component="label"
            hidden={state ? true : false}
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
        </div> */}
        {imgState && (
                <img
                  src={`${imgState}`}
                  className="rounded-md ml-60 mt-12 w-96 h-96"
                />
              )}
               {/* {props.editEmployeeData !== null && imgState == null && (
                <Avatar
                  src={`data:image/jpg;base64,${
                    props.editEmployeeData.displayImage
                      ? props.editEmployeeData.displayImage
                      : "https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop"
                  }`}
                  className="rounded-md ml-60 mt-12 w-96 h-96 "
                />
              )} */}
        {/* {props.editEmployeeData?._id ? <Avatar src="" /> : ""} */}
        <div>
        <div className="m-8 mt-24 p-24 justify-center items-center shadow-2xl" align="center">
        <Typography variant="h4" className={classes.title}>
            Booking Form
          </Typography>
          <div className="flex justify-center items-center w-96">
          <TextField
            // error
            id="first_name"
            label="First Name"
            name="first_name"
            // value={values.first_name}
            // onBlur={handleBlur}
            // error={!!touched.first_name && !!errors.first_name}
            // helperText={touched.first_name && errors.first_name}
            variant="standard"
            margin="dense"
            // disabled={!!props.editEmployeeData?._id}
            required
            // onChange={handleChange}
            fullWidth
          />
          </div>
          <div className="flex justify-center items-center w-96">
          <TextField
            // className="mx-96 pb-8 mt-8 flex"
            // error
            id="last_name"
            label="Last Name"
            name="last_name"
            // value={values.last_name}
            onBlur={handleBlur}
            // error={!!touched.last_name && !!errors.last_name}
            // helperText={touched.last_name && errors.last_name}
            variant="standard"
            // disabled={!!props.editEmployeeData?._id}
            required
            // onChange={handleChange}
            fullWidth
          />
          </div>
          <div className="flex justify-center items-center w-96">
          <TextField
            // className="mx-96 pb-8 mt-8 flex"
            // error
            id="email"
            label="Email"
            name="email"
            // error={!!touched.email && !!errors.email}
            // helperText={
            //   props.errorMessage?.email
            //     ? props.errorMessage?.email
            //     : touched.email && !!errors.email && errors.email
            // }
            // error={
            //   props.errorMessage?.email? true : touched.email && !!errors.email
            // }
            variant="standard"
            // value={values.email}
            // onBlur={handleBlur}
            variant="standard"
            margin="dense"
            required
            fullWidth
          />
          </div>

           <div className="flex justify-center items-center w-96">
          <TextField
            // className="mx-96 pb-8 mt-8 flex"
            // error
            id="phone"
            label="Phone"
            name="phone"
            // value={values.phone}
            onBlur={handleBlur}
            // error={!!touched.phone && !!errors.phone}
            // helperText={touched.phone && errors.phone}
            // helperText={
            //   props.errorMessage?.phone
            //     ? props.errorMessage?.phone
            //     : touched.phone && !!errors.phone && errors.phone
            // }
            // error={
            //   props.errorMessage?.phone ? true : touched.phone && !!errors.phone
            // }
            variant="standard"
            margin="dense"
            fullWidth
            required
            // onChange={handleChange}
          />
          </div>

          {/* <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            // className="mx-8 pr-8 pb-16"
          >
            <KeyboardDatePicker
              className="mx-96 pb-8 mt-8 flex w-auto"
              error
              id="date-picker-dialog"
              label="Dob"
              name="dob"
              // inputVariant="standard"
              format="MM/dd/yyyy"
              // value={values.dob}
              onBlur={handleBlur}
              error={!!touched.dob && !!errors.dob}
              helperText={touched.dob && errors.dob}
              required
              // disabled={!!props.editEmployeeData?._id}
              onChange={(event) => {
                setValues({
                  ...values,
                  dob: event,
                });
              }}
              // fullWidth
              KeyboardButtonProps={{
                "aria-label": "change date ",
              }}
            />
          </MuiPickersUtilsProvider> */}
          {/* {console.log("Vasleus", values)} */}
          
          
          {/* <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            // className="mx-8 pr-8 pb-16"
          >
            <KeyboardDatePicker
              className="mx-96 pb-16 flex "
              error
              id="date-picker-dialog"
              label="Joining Date"
              name="join_date"
              // inputVariant="standard"
              format="MM/dd/yyyy"
              // value={values.join_date}
              onBlur={handleBlur}
              error={!!touched.join_date && !!errors.join_date}
              helperText={touched.join_date && errors.join_date}
              required
              // disabled={!!props.editEmployeeData?._id}
              onChange={(event) => {
                setValues({
                  ...values,
                  join_date: event,
                });
              }}
              // fullWidth
              KeyboardButtonProps={{
                "aria-label": "change date ",
              }}
            />
          </MuiPickersUtilsProvider> */}
           <div className="flex justify-center items-center w-96">
          <TextField
            // className="mx-96 pb-8 mt-8 flex"
            // error
            id="department"
            label="Department"
            name="department"
            // value={values.department}
            onBlur={handleBlur}
            // error={!!touched.department && !!errors.department}
            // helperText={touched.department && errors.department}
            variant="standard"
            margin="dense"
            fullWidth
            required
            // onChange={handleChange}
          />
          </div>
          <div className="flex justify-center items-center w-96">
          <TextField
            // className="mx-96 pb-8 mt-8 flex"
            // error
            id="salary"
            label="Salary"
            name="salary"
            type="number"
            // value={values.salary}
            onBlur={handleBlur}
            // error={!!touched.salary && !!errors.salary}
            // helperText={touched.salary && errors.salary}
            variant="standard"
            margin="dense"
            fullWidth
            required
            // onChange={handleChange}
          />
         </div>
       
        <Button
                color="primary"
                className="m-4"
                variant="contained"
                // onClick={() => {
                //   addAddressHandler();
                // }}
              // disabled={checkDisable()}
              // disabled={!dirty || isSubmitting || !isValid}
              >
                Book Now
              </Button>
              <Button
                color="primary"
                style={{margin: 5}}
                variant="contained"
                // onClick={() => {
                //   clickHandler();
                // }}
              >
                Cancel
              </Button>
              </div>
        </div>
      </form>

      {/* </FormControl> */}
    </div>
  );
};
export default New;
