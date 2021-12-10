import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
<<<<<<< HEAD
import Header from "./Header";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Country, State, City } from "country-state-city";
import * as Yup from "yup";
import {  withFormik } from "formik";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const BookingForm = (props) => {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    open,
    isSubmitting,
    // onClose,
    setValues,
    address,
    setFieldValue,
    test,
    setErrors,
    addressDrawer,
    handleAddressTab,
    addressDrawerId,
    addressDrawerMode,
    handleAddressId,
    handleAddressTabMode,
    addEmployeeDetails,
    getAllAddressEmployees,
    deleteEmployeeAddress,
    editEmployeeaddress
  } = props;
  const [countryList, setCountryList] = React.useState(
    Country.getAllCountries()
  );
  const [addressState, setAddressState] = React.useState({
    country: "",
    state: "",
    city: "",
  });
  const [stateList, setStateList] = React.useState(State.getAllStates());
  const [cityList, setCityList] = React.useState([]);
  const [deleteState, setDeleteState] = React.useState({
    open: false,
    _id: null,
  });

  const deleteEmpHandler = (addressId) => async () => {
    setDeleteState({
      open: true,
      _id: addressId,
    });
  };
  const onClose = () => {
    setDeleteState({
      ...deleteState,
      open: false
    })
  }

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  const clickHandler = () => {
    handleAddressTab();
    handleAddressTabMode("ADD");
    props.setTouched({})
    resetFields();
  };

  const deleteHandler = async () => {
    await deleteEmployeeAddress(deleteState._id);
    onClose()
    console.log("===>>>>>")
    // onClose();
  };

  const addAddressHandler = async () => {
    handleSubmit();
  }

  const handleClickOpen = (val) => () => {
    console.log("tes val: ", val);
    handleAddressTab();
    handleAddressTabMode("EDIT");
    handleAddressId(val._id);
    const foundAddr = address.find(add => add._id === val._id);
    console.log("found addr", foundAddr)
    setValues({
      ...values,
      country: foundAddr.country,
      city: foundAddr.city,
      state: foundAddr.state,
      address_type: foundAddr.address_type,
      appartment_detail: foundAddr.appartment_detail,
      street_address: foundAddr.street_address,
      zip: foundAddr.zip,
    })
    // editEmployeeaddress(val);
  };

  // const handleChangePage = (event, newPage) => {
  //   // getAllAddressEmployees();
  //   setPage(newPage);
  // };

  // useEffect(() => {
  //   getAllAddressEmployees();
  // }, []);

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  const resetFields = () => {
    setFieldValue("country", "");
    setFieldValue("state", "");
    setFieldValue("city", "");
    setFieldValue("zip", "");
    setFieldValue("appartment_detail", "");
    setFieldValue("address_type", "");
    setFieldValue("street_address", "");
  }
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center">
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            paddingTop: "30px",
            paddingBottom: "10px",
          }}
        >
          Booking Form
        </Typography>
        <div container className="flex flex-col justify-center w-3/4 m-auto ">
          <div className="flex mt-8 ">
            <TextField
              style={{ marginRight: "10px" }}
              required
              fullWidth
              id="firstName"
              name="firstName"
              label="First name"
              autoComplete="given-name"
              variant="outlined"
              autoFocus
            />

            <TextField
              required
              fullWidth
              id="lastName"
              name="lastName"
              label="Last name"
              // fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
          </div>
          {/* <div className="flex mt-8 ">
            <TextField
              style={{ marginRight: "10px" }}
              variant="outlined"
              fullWidth
              required
              id="address1"
              name="address1"
              label="Address"
              // fullWidth
              autoComplete="shipping address-line1"
            />

            <TextField
              variant="outlined"
              fullWidth
              id="address2"
              name="address2"
              label="Address line 2"
              // fullWidth
              autoComplete="shipping address-line2"
            />
          </div>
          <div className="flex mt-8">
            <TextField
              style={{ marginRight: "10px" }}
              variant="outlined"
              fullWidth
              required
              id="country"
              name="country"
              label="Country"
              // fullWidth
              autoComplete="shipping country"
            />

            <TextField
              variant="outlined"
              fullWidth
              required
              id="city"
              name="city"
              label="City"
              variant="outlined"
              // fullWidth
            />
          </div>
          <div className="flex mt-8">
            <TextField
              style={{ marginRight: "10px" }}
              variant="outlined"
              fullWidth
              id="state"
              name="state"
              label="State/Province/Region"
              // fullWidth
            />

            <TextField
              required
              variant="outlined"
              fullWidth
              id="zip"
              name="zip"
              label="Zip / Postal code"
              // fullWidth
              autoComplete="shipping postal-code"
            />
          </div> */}
           <div className="flex mt-4">
                <Autocomplete
                style={{marginRight:"10px"}}
                  autoComplete={false}
                  id="country"
                  // options={countryList}
                  options={Country.getAllCountries()}
                  className={`flex flex-1`}
                  getOptionLabel={(option) => {
                    if (option?.name) {
                      return `${option.name} ( ${option.phonecode} )`;
                    } else {
                      return option || "";
                    }
                  }}
                  value={values.country.name ? values.country.name : ""}
                  onBlur={handleBlur}
                  onChange={(_, value) => {
                    if (value === null || value?.name.trim().length === 0) {
                      setValues({ ...values, country: "", state: "", city: "" })
                    } else {
                      setValues({
                        ...values, country: {
                          name: value.name,
                          id: value.isoCode
                        },
                        state: "", city: ""
                      })
                    }
                  }}
                  renderInput={(params) => {
                    params.inputProps.className = "text-12";
                    return (
                      <TextField
                        error
                        className="mx-8 pb-8"
                        label="Country"
                        name="country"
                        variant="outlined"
                        error={!!touched.country && !!errors.country}
                        helperText={touched.country && errors.country}
                        {...params}
                        required
                        fullWidth
                      />
                    );
                  }}
                />
              
                <Autocomplete
                // style={{marginRight:"10px"}}
                  autoComplete={false}
                  id="State"
                  // options={stateList}
                  options={State.getStatesOfCountry(values.country.id)}
                  className={`flex flex-1`}
                  getOptionLabel={(option) => {
                    if (option?.name) {
                      return `${option.name}`;
                    } else {
                      return option || "";
                    }
                  }}
                  value={values.state.name ? values.state.name : ""}
                  onBlur={handleBlur}
                  onChange={(_, value) => {
                    if (value === null || value?.name.trim().length === 0) {
                      setErrors({
                        ...errors,
                        state: "State is required...!",
                      });
                    } else {
                      setFieldValue("state", {
                        name: value.name,
                        id: value.isoCode,
                      });
                    }
                  }}
                  renderInput={(params) => {
                    params.inputProps.className = "text-12";
                    return (
                      <TextField
                        error
                        className="mx-8 pb-8"
                        label="State"
                        name="state"
                        variant="outlined"
                        error={!!touched.state && !!errors.state}
                        helperText={touched.state && errors.state}
                        {...params}
                        required
                        fullWidth
                      />
                    );
                  }}
                />
              </div>

              <div className="flex mt-4">
                <Autocomplete
                 style={{marginRight:"10px"}}
                  autoComplete={false}
                  id="City"
                  // options={cityList}
                  options={City.getCitiesOfState(
                    values.country.id,
                    values.state.id
                  )}
                  className={`flex flex-1`}
                  getOptionLabel={(option) => {
                    if (option?.name) {
                      return `${option.name}`;
                    } else {
                      return option || "";
                    }
                  }}
                  value={values.city.name ? values.city.name : ""}
                  onBlur={handleBlur}
                  // onChange={(_, value) => {
                  //   setFieldValue("city", value?.name ? value.name : "");
                  //   // setAddressState({
                  //   //   ...addressState,
                  //   //   city: value?.isoCode || "",
                  //   // });
                  // }}
                  
                  onChange={(_, value) => {
                    if (value === null || value?.name.trim().length === 0) {
                      setErrors({
                        ...errors,
                        city: "City is required...!",
                      });
                    } else {
                      setFieldValue("city", { name: value.name });
                    }
                  }}
                  renderInput={(params) => {
                    params.inputProps.className = "text-12";
                    return (
                      <TextField
                        error
                        className="mx-8 pb-8"
                        name="city"
                        label="City"
                        variant="outlined"
                        error={!!touched.city && !!errors.city}
                        helperText={touched.city && errors.city}
                        {...params}
                        required
                        fullWidth
                      />
                    );
                  }}
                />
             <Autocomplete
                  autoComplete={false}
                  id="zip"
                  // options={cityList}
                  options={City.getCitiesOfState(
                    values.country.id,
                    values.state.id
                  )}
                  className={`flex flex-1`}
                  getOptionLabel={(option) => {
                    if (option?.name) {
                      return `${option.name}`;
                    } else {
                      return option || "";
                    }
                  }}
                  value={values.city.name ? values.city.name : ""}
                  onBlur={handleBlur}
                  // onChange={(_, value) => {
                  //   setFieldValue("city", value?.name ? value.name : "");
                  //   // setAddressState({
                  //   //   ...addressState,
                  //   //   city: value?.isoCode || "",
                  //   // });
                  // }}
                  
                  onChange={(_, value) => {
                    if (value === null || value?.name.trim().length === 0) {
                      setErrors({
                        ...errors,
                        city: "City is required...!",
                      });
                    } else {
                      setFieldValue("city", { name: value.name });
                    }
                  }}
                  renderInput={(params) => {
                    params.inputProps.className = "text-12";
                    return (
                      <TextField
                        error
                        className="mx-8 pb-8"
                        name="city"
                        label="City"
                        variant="outlined"
                        error={!!touched.city && !!errors.city}
                        helperText={touched.city && errors.city}
                        {...params}
                        required
                        fullWidth
                      />
                    );
                  }}
                />
                </div>


         
          <div className="flex p-8 justify-center items-center">
            <Button
              style={{
                alignItems: "center",
                justifyItems: "center",
                backgroundColor: "#263238",
              }}
              color="primary"
              // className="m-4"
              variant="contained"
              // style={{ backgroundColor: " #c8d8e4" }}
              // onClick={() => {
              //   addAddressHandler();
              // }}
              // disabled={checkDisable()}
              // disabled={!dirty || isSubmitting || !isValid}
            >
              Book Now
            </Button>
            <Button
              // className="m-4"
              style={{
                margin: 5,
              }}
              variant="outlined"
              // onClick={() => {
              //   clickHandler();
              // }}
            >
              Cancel
            </Button>
          </div>
=======

export default function AddressForm() {
  return (
    <div className="flex flex-col justify-center" style={{backgroundColor:"#2b6777"}} >
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          paddingTop: "30px",
          paddingBottom: "10px",
          color:"white"
        }}
      >
        Booking Form
      </Typography>
      <div container className="flex flex-col justify-center w-3/4 m-auto ">
        <div className="flex mt-8 ">
          <TextField
            style={{ marginRight: "10px"}}
            required
            fullWidth
            id="firstName"
            name="firstName"
            label="First name"
            autoComplete="given-name"
            variant="outlined"
            autoFocus
          />

          <TextField
            required
            fullWidth
            id="lastName"
            name="lastName"
            label="Last name"
            // fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </div>
        <div className="flex mt-8 ">
          <TextField
            style={{ marginRight: "10px" }}
            variant="outlined"
            fullWidth
            required
            id="address1"
            name="address1"
            label="Address line 1"
            // fullWidth
            autoComplete="shipping address-line1"
          />

          <TextField
            variant="outlined"
            fullWidth
            id="address2"
            name="address2"
            label="Address line 2"
            // fullWidth
            autoComplete="shipping address-line2"
          />
        </div>
        <div className="flex mt-8">
          <TextField
            style={{ marginRight: "10px" }}
            variant="outlined"
            fullWidth
            required
            id="country"
            name="country"
            label="Country"
            // fullWidth
            autoComplete="shipping country"
          />

          <TextField
            variant="outlined"
            fullWidth
            required
            id="city"
            name="city"
            label="City"
            variant="outlined"
            // fullWidth
          />
        </div>
        <div className="flex mt-8">
          <TextField
            style={{ marginRight: "10px" }}
            variant="outlined"
            fullWidth
            id="state"
            name="state"
            label="State/Province/Region"
            // fullWidth
          />

          <TextField
            required
            variant="outlined"
            fullWidth
            id="zip"
            name="zip"
            label="Zip / Postal code"
            // fullWidth
            autoComplete="shipping postal-code"
          />
        </div>
        <div className="p-4 my-4">
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </div>
        <div className="flex p-8 justify-center items-center">
          <Button
            style={{
              alignItems: "center",
              justifyItems: "center",
              backgroundColor: "#263238",
            }}
            color="primary"
            // className="m-4"
            variant="contained"
            style={{backgroundColor:" #c8d8e4"}}
            // onClick={() => {
            //   addAddressHandler();
            // }}
            // disabled={checkDisable()}
            // disabled={!dirty || isSubmitting || !isValid}
          >
            Book Now
          </Button>
          <Button
            color="#263238"
            // className="m-4"
            style={{
              margin: 5,
            }}
            variant="outlined"
            // onClick={() => {
            //   clickHandler();
            // }}
          >
            Cancel
          </Button>
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
function checkRequired(props) {
  console.log("props.activeStep",props.activeStep);
  console.log("props.addressDrawer",props.addressDrawer);
  if (props.activeStep === 0)
      return Yup.object().shape({
        first_name: Yup.string().required("Enter valid name"),
        last_name: Yup.string().required("Enter valid name"),
        email: Yup.string()
          .email("Enter valid email")
          .required(),
        phone: Yup.string()
        .required("This field is Required")
          .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid"
          )
          .max(11),
          
        join_date: Yup.date().nullable().required("Enter your Joining date"),
        dob: Yup.date().nullable().required("Enter Your Birth Date"),
        department: Yup.string().required("Enter department name"),
        salary: Yup.number().required("Enter Salary"),
      });
  else if (props.activeStep === 1 && props.addressDrawer)
      return Yup.object().shape({
      street_address: Yup.string().required("Enter Street Address"),
      address_type: Yup.string().required("Enter Appartment Type"),
      appartment_detail: Yup.string().required("Enter Appartment Detail"),
      city: Yup.string().required("Enter City Name"),
      state: Yup.string().required("Enter state Name"),
      country: Yup.string().required("Enter country Name"),
      zip: Yup.string().required("Enter zip Name"),
      });
      else {
        return Yup.object().shape({
          street_address: Yup.string(),
          address_type: Yup.string(),
          appartment_detail: Yup.string(),
          city: Yup.string(),
          state: Yup.string(),
          country: Yup.string(),
          zip: Yup.string(),
          });
      }
}


const Form = withFormik({
  enableReinitialize: false,
  // validateOnChange: false,
  // validateOnBlur: false,
  mapPropsToValues: (props) => {
    return {
      first_name: props.editEmployeeData?.first_name
        ? props.editEmployeeData?.first_name
        : "",
      last_name: props.editEmployeeData?.last_name
        ? props.editEmployeeData?.last_name
        : "",
      email: props.editEmployeeData?.email ? props.editEmployeeData?.email : "",
      phone: props.editEmployeeData?.phone ? props.editEmployeeData?.phone : "",
      // age: props.editEmployeeData?.age ? props.editEmployeeData?.age : "",
      dob: props.editEmployeeData?.dob
        ? props.editEmployeeData?.dob
        : null,
      join_date: props.editEmployeeData?.join_date
        ? props.editEmployeeData?.join_date
        : null,
      department: props.editEmployeeData?.department
        ? props.editEmployeeData?.department
        : "",
      salary: props.editEmployeeData?.salary
        ? props.editEmployeeData?.salary
        : "",
      country: props.editEmployeeData?.country
        ? props.editEmployeeData?.country
        : "",
      state: props.editEmployeeData?.state ? props.editEmployeeData?.state : "",
      city: props.editEmployeeData?.city ? props.editEmployeeData?.city : "",
      zip: props.editEmployeeData?.zip ? props.editEmployeeData?.zip : "",
      address_type: props.editEmployeeData?.address_type
        ? props.editEmployeeData?.address_type
        : "",
      street_address: props.editEmployeeData?.street_address
        ? props.editEmployeeData?.street_address
        : "",
      appartment_detail: props.editEmployeeData?.appartment_detail
        ? props.editEmployeeData?.appartment_detail
        : "",
      empId: props?.addressDrawerMode === "EDIT" ? props.editEmployeeData?._id : "",
      // addresses: [],
    };
  },
  
    validationSchema: (props) => checkRequired(props),
  async handleSubmit(values, { setSubmitting, setValues,setTouched, props }) {
    setSubmitting(true);
    console.log("values", values);
    console.log("props.activeStep", props.activeStep);
    let empAdress;
    if (props.activeStep === 0) {
      if ((props.editEmployeeData && props.editEmployeeData !== "") || values.empId) {
        // edit code
        console.log("inside edit")
        const empData = await props.editemployee(
          props.editEmployeeData._id ?props.editEmployeeData._id : values.empId,
          values
        );
        console.log("empData", empData);
        if (empData) {
          setValues({
            ...values,
            empId: empData._id,
          });
          setTouched({})
          props.handleActiveTab(props.activeStep + 1)
        }
      } else {
        const empId = await props.addemployee(values);
        console.log("empId", empId);
        if (empId) {
          setValues({
            ...values,
            empId: empId,
          });
          setTouched({})
          props.handleActiveTab(props.activeStep + 1);
         
        }
      }
    } if (props.activeStep === 1) {
      if (props.addressDrawerMode === "EDIT") {
        empAdress = await props.editEmployeeaddress(props.addressDrawerId, values);
        console.log("EDIT address", empAdress);
      }
      else if (props.addressDrawerMode === "ADD") {
        console.log("ADD address");
        empAdress = await props.addEmployeeDetails(values);
        console.log("empAdress",empAdress);
      }
      props.handleAddressTab();
      // if (state.type === "EDIT") {
      //   console.log("state", state);
      //   // }
      //   empAdress = await props.editEmployeeaddress(state.addressId, values);
      //   console.log("address", empAdress);
      // }
      // if (state.type === "ADD") {
      //   console.log("else case");
      //   empAdress = await props.addEmployeeDetails(values);
      // }

    //  await props.handleActiveTab(props.activeStep + 1)
    //  props.test();
    }

    console.log("values", values);
  },
  displayName: "BasicForm",
})(BookingForm);

const mapStateToProps = (state) => {
  return {
  
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
     
    },
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));


=======
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
// import React from "react";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import { useEffect } from "react";
// import { Avatar, Grid, Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   list: {
//     width: 500,
//   },
//   fullList: {
//     width: "auto",
//   },
//   drawer: {
//     width: "500",
//   },
//   height: {
//     maxheight: "44rem",
//   },
// }));

// const New = (props) => {
//   const {
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     values,
//     handleSubmit,
//     open,
//     onClose,
//     setValues,
//     reset,
//   } = props;
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     right: false,
//   });
//   const [imgState, setImgState] = React.useState(null);

//   // const toggleDrawer = (anchor, open) => (event) => {
//   //   if (
//   //     event.type === "keydown" &&
//   //     (event.key === "Tab" || event.key === "Shift")
//   //   ) {
//   //     return;
//   //   }

//   //   setState({ ...state, [anchor]: open });
//   // };

//   // const handleClose = () => {
//   //   props.onClose();
//   // };

//   const fileChangeHandler = (event) => {
//     console.log("event", event.target.files[0]);
//     // setState(event.target.files[0]);

//     setValues({
//       ...values,
//       file: event.target.files[0],
//     });
//     var reader = new FileReader();
//     var url = reader.readAsDataURL(event.target.files[0]);
//     reader.onloadend = function (e) {
//       setImgState(reader.result);
//     };
//   };

//   useEffect(() => {
//     // addemployee();
//     // editemployee();
//   }, []);

//   // const checkDisable = () => {
//   //   if (
//   //     errors.email ||
//   //     errors.first_name ||
//   //     errors.last_name ||
//   //     errors.password ||
//   //     errors.phone ||
//   //     errors.join_date ||
//   //     errors.department ||
//   //     errors.dob
//   //   ) {
//   //     return true;
//   //   } else return false;
//   // };
//   return (
//     <div>
//       {/* <div className="flex w-full px-8 sm:px-16 bg-grey-300 justify center items-center overflow-hidden">
//         <h1>
//           {props.editEmployeeData?._id ? "Edit Employee" : "Add Employee"}
//         </h1>
//       </div> */}
//       <form
//         onSubmit={handleSubmit}
//         // className="overflow-auto "
//         // className="mt-20 mr-20 mb-20 ml-20 p-25 overflow-auto flex flex-1 justify center flex-wrap mb-4 w-full px-16 py-8 max-h-512"
//         // className={classes.height}
//       >
//         {/* <div className="flex ">
//           <Button
//             className="ml-48 "
//             variant="contained"
//             color="primary"
//             startIcon={<CloudUploadIcon />}
//             component="label"
//             hidden={state ? true : false}
//           >
//             Upload
//             <input
//               hidden
//               id="file"
//               label="file"
//               type="file"
//               name="file"
//               onChange={fileChangeHandler}
//             />
//           </Button>
//         </div> */}
//         {imgState && (
//           <img
//             src={`${imgState}`}
//             className="rounded-md ml-60 mt-12 w-96 h-96"
//           />
//         )}
//         {/* {props.editEmployeeData !== null && imgState == null && (
//                 <Avatar
//                   src={`data:image/jpg;base64,${
//                     props.editEmployeeData.displayImage
//                       ? props.editEmployeeData.displayImage
//                       : "https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop"
//                   }`}
//                   className="rounded-md ml-60 mt-12 w-96 h-96 "
//                 />
//               )} */}
//         {/* {props.editEmployeeData?._id ? <Avatar src="" /> : ""} */}
//         <div
//           className="m-8 mt-8 p-24 justify-center items-center shadow-2xl"
//           align="center"
//         >
//           <Typography variant="h4" style={{ marginBottom: "30px" }}>
//             Booking Form
//           </Typography>
//           <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="firstName"
//             name="firstName"
//             label="First name"
//             fullWidth
//             autoComplete="given-name"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="lastName"
//             name="lastName"
//             label="Last name"
//             fullWidth
//             autoComplete="family-name"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="address1"
//             name="address1"
//             label="Address line 1"
//             fullWidth
//             autoComplete="shipping address-line1"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="city"
//             name="city"
//             label="City"
//             fullWidth
//             autoComplete="shipping address-level2"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField id="state" name="state" label="State/Province/Region" fullWidth />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="zip"
//             name="zip"
//             label="Zip / Postal code"
//             fullWidth
//             autoComplete="shipping postal-code"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="country"
//             name="country"
//             label="Country"
//             fullWidth
//             autoComplete="shipping country"
//           />
//         </Grid>
//         </Grid>
//           <div className=" mt-8">
//             <Button
//               color="primary"
//               // className="m-4"
//               variant="contained"
//               // onClick={() => {
//               //   addAddressHandler();
//               // }}
//               // disabled={checkDisable()}
//               // disabled={!dirty || isSubmitting || !isValid}
//             >
//               Book Now
//             </Button>
//             <Button
//               color="primary"
//               // className="m-4"
//               style={{ margin: 5 }}
//               variant="outlined"
//               // onClick={() => {
//               //   clickHandler();
//               // }}
//             >
//               Cancel
//             </Button>
//           </div>
//         </div>
//       </form>

//       {/* </FormControl> */}
//     </div>
//   );
// };
// export default New;
