import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: "white",
    marginTop: "1rem",
    padding: "20px",

    // position: "sticky",
    // bottom: 0,
    // zIndex: 333,
  },
  // main: {
  //   marginTop: theme.spacing(8),
  //   marginBottom: theme.spacing(2),
  // },
  // footer: {
  //   padding: theme.spacing(3, 2),
  //   marginTop: "auto",
  //   color: "primary",
  //   backgroundColor:
  //     theme.palette.type === "light"
  //       ? theme.palette.grey[200]
  //       : theme.palette.grey[800],
  // },
}));

const StickyFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <div className="mx-36 flex p-4 font-black justify-between">
          <Typography variant="h5">Follow us</Typography>
          <Typography variant="h5" className="">
            Legal
          </Typography>
        </div>
        <Container style={{ display: "flex" }}>
          <div className="flex w-1/4 p-2">
            <div className="p-4">
              <FacebookIcon />
            </div>
            <div className="p-4">
              <InstagramIcon />
            </div>
            <div className="p-4">
              <TwitterIcon />
            </div>
            <div className="p-4">
              <YouTubeIcon />
            </div>
          </div>

          <div className="flex justify-end w-3/4">
            <div className="p-4">
              Terms & Conditions | Disclaimer | Privacy Policy | Refund and
              Cancellation Policy
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default StickyFooter