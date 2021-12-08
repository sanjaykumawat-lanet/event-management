import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { blue } from "@material-ui/core/colors";
import { DialogContent } from "@material-ui/core";
import { Slide } from "@material-ui/core";
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open, content, title } = props;

  const handleClose = () => {
    onClose();
  };

  //   const handleListItemClick = (value) => {
  //     onClose(value);
  //   };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    //   style={{width:"1000px"}}
      // style={{ transition: "all 0.5S linear", transform: "translate(0, 40px)" }}
      TransitionComponent={Transition}
      keepMounted
      
    >
      <DialogTitle
        id="simple-dialog-title "
        
        className="shadow-lg"
      >
        {title}
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
}

export default SimpleDialog;
