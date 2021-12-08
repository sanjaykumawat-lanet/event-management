import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // imageDiv: {
  //   height: "300px",
  //   // width: "100%",
  // },
  // image: {
  //   // height: "500px",
  //   // width: "100%",
  //   width: "100%",
  //   minHeight: "100%",
  // },
  img: {
    maxWidth: "100%",
    height: "100%",
  },

  item: {
    // width: "1200px",
    // minHeight: "500px",
    // maxHeight: "auto",
  },
  carousel: {
    height: "500px",
    justifyContent: "center",
    "& .thumbs-wrapper": {
      display: "none",
    },
    "& .carousel-status": {
      display: "none",
    },
    "& .carousel.carousel-slider":{
      height: "500px",
    },
    "& .carousel .slider":{
      height: "500px",
    },
  },
}));

const Slider = (props) => {
  const {} = props;
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay={false}
        className={classes.carousel}
        dynamicHeight={true}
      >
        <div className={classes.item}>
          <img
            src="https://www.kreativdistrikt.com/wp-content/uploads/2020/02/cover.jpg"
            alt="slider1"
            className={classes.img}
          />
        </div>
        <div className={classes.item}>
          <img
            src="https://miro.medium.com/max/2000/1*AXF8IYKqC3Y7JxYRaUrCPQ.png"
            alt="slider1"
            className={classes.img}
          ></img>
        </div>
        <div className={classes.item}>
          <img
            src="https://resources.scrumalliance.org/uploads/2021/5/13/Hachathon-1ICGpr3rr0uiOtsrPSQu9g.jpg"
            alt="slider1"
            className={classes.img}
          ></img>
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
  );
};

export default Slider;
