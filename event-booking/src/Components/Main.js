import Header from "./Ui/Header";
import Footer from "./Ui/Footer";
import SignUp from "../Components/auth/SignUp";
import BookingForm from "./Ui/bookingForm";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../Components/auth/Signin";
import { useEffect } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AppRoutes from "../Router/Routes";
import Slider from "./Ui/slider";
import Card from "./Ui/Card";
import { getAllEvents } from "./store/action/eventActions";
const Main = (props) => {
  useEffect(() => {
    props.getAllEvents();
  }, []);
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllEvents,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Main);
