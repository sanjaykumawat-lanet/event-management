import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
// import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Custompanel(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
        {props.title}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {props.count}
      </Typography>
      <div>
        <Button color="primary" variant="contained" href={props.action} onClick={preventDefault}>
          {props.actionText}
        </Button>
      </div>
    </React.Fragment>
  );
}
