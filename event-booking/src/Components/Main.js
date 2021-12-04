import Header from "./Ui/Header";
import SignUp from "../Components/auth/SignUp";
import BookingForm from "./Ui/bookingForm"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../Components/auth/Signin";
import { useEffect } from "react";
import { checkLogin } from "./store/action/uiActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Admin from "../Components/admin"

const Main = (props) => {
  useEffect(() => {
    console.log("Effect runnig");
    props.checkLogin();
  }, []);
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/BookingForm">
            <BookingForm />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          {/* <Route path="/Addemployee">
            <Addemployee />
          </Route>
          <Route path="/List">
            <List />
          </Route> */}
          {/* <Route path="/Logout">
          <Logout />
        </Route> */}
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      checkLogin,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Main);
