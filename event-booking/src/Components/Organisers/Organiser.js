import { Route, Router ,Switch } from "react-router";
import Dashboard from "./Dashboard";
import Userlist from "./Userlist";

const Organiser = (props) => {
  return (
    <div>
      {/* <Header /> */}
      
      <Dashboard {...props}/>
    
    </div>
  );
};

export default Organiser;
