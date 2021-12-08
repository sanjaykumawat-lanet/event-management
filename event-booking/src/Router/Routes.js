import Header from "../Components/Ui/Header";
import SignUp from "../Components/auth/SignUp";
import BookingForm from "../Components/Ui/bookingForm";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../Components/auth/Signin";
import { useEffect } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Admin from "../Components/admin/Admin";
import Main from "../Components/Main";
import Utilites from "../Components/Ui/Utilities";
import Organiser from "../Components/Organisers/Organiser";
import { PrivateRoute } from "../Components/shared/PrivateRoutes";
import Userlist from "../Components/Organisers/Userlist";

export default function AppRoutes() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Utilites />
          </Route>

          <Route path="/admin/signin">
            <SignIn action="ADMIN" />
          </Route>
          <Route path="/user/signin">
            <SignIn action="USER" />
          </Route>
          <Route path="/organizer/signin">
            <SignIn action="ORGANIZER" />
          </Route>
          <Route path="/BookingForm">
            <BookingForm />
          </Route>

          {/* <Route exact path="/admin/signup">
            <SignUp action="ADMIN" />
          </Route> */}
          <Route exact path="/user/signup">
            <SignUp action="USER" />
          </Route>
          <Route exact path="/organizer/signup">
            <SignUp action="ORGANIZER" />
          </Route>

          <Route exact path="/admin/dashboard">
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          </Route>
          <Route  path="/organiser/:subComponent" component={Organiser} />
          {/* <Route exact path="/organiser/dashboard/list" component={Userlist} /> */}
            {/* <Organiser /> */}
          {/* <Route exact path="/organiser/dashboard">
            <Userlist />
          </Route> */}
        </Switch>
      </Router>
   
  );
}
