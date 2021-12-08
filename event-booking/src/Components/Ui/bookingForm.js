import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";

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
        </div>
      </div>
    </div>
  );
}

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
