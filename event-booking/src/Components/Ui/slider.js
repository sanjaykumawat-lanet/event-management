import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    image: {
        height: "500px",
        width: "100%",
      },
      carousel: {
        justifyContent: "center",
        "& .thumbs-wrapper": {
          display: "none",
        },
        "& .carousel-status": {
          display: "none",
        },
      },
  }));

  const Slider = (props) => {
    const {  } =
      props;
    const classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);
  
return (

<div >
      <Carousel infiniteLoop autoPlay className={classes.carousel}>
        <div className={classes.image}>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/79d60316191875.562a694ddaa84.jpg" alt="slider1" />
        </div>
        <div className={classes.image}>
          <img src="https://eventornado-files.ams3.cdn.digitaloceanspaces.com/blog/the-rise-of-online-hackathons.png" alt="slider1"></img>
        </div>
        <div className={classes.image}>
          <img src="https://graphicriver.img.customer.envatousercontent.com/files/311785868/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=496442bd4867073b055c338e9db094d2" alt="slider1"></img>
        </div>
        {/* <div className={classes.image}>
          <img src="../assets/images/SLIDER4.jpg" alt="slider1"></img>
        </div>
        <div className={classes.image}>
          <img src="../assets/images/SLIDER5.jpg" alt="slider1"></img>
        </div> */}
      </Carousel>
      {/* <div className={classes.bigDiv}></div> */}
    </div>
)
  };

  export default Slider