import React from "react";
import Drawer from "@material-ui/core/Drawer/Drawer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DialogTitle from "@material-ui/core/DialogTitle";

import { toggleEventDialog } from "../store/action/uiActions";

const UserDrawer = (props) => {
  const {
    open,
    toggleEventDialog,
    title
  } = props;

  const drawerCloseHandler = () => {
    // onClose();
    toggleEventDialog();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={drawerCloseHandler}
      className="m-10"
   
    >
        {props.children}
        
    </Drawer>
     
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
        toggleEventDialog,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(UserDrawer);
