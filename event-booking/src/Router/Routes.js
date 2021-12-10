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

export default function AppRoutes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/BookingForm" component={BookingForm}></Route>
          <Route path="/signin">
            <SignIn action="ADMIN" />
          </Route>
          <Route path="/admin/:subComponent" component={Admin}>
            {/* <PrivateRoute>
              <Admin />
            </PrivateRoute> */}
          </Route>
          <Route exact path="/signup">
            <SignUp action="USER" />
          </Route>
          <Route exact path="/organizer/signup">
            <SignUp action="ORGANIZER" />
          </Route>

          <Route path="/organiser/:subComponent" component={Organiser}>
          </Route>

          {/* <Route path="/admin/signin">
            <SignIn action="ADMIN" />
          </Route> */}
          

          

          {/* <Route exact path="/admin/signup">
            <SignUp action="ADMIN" />
          </Route> */}
          

          
          {/* <Route path="/admin/dashboard/organiserlist">
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          </Route> */}
          
        </Switch>
      </Router>
    </div>
  );
}
