import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Avatar, CardHeader, IconButton, Popover } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Carousel from "react-elastic-carousel";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UpcomingEvent from "./UpcomingEvent"
import transitions from "@material-ui/core/styles/transitions";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
 
 
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "1px 2px 5px grey",
    margin: "10px",
  
  },
  cardMedia: {
    paddingTop: "56.25%",
    // 16:9
  },
  cardContent: {
    flexGrow: 1,
   
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
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
  btnHover:{
    
  }
}));
const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];
const Album = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // const card = [

  //   {
  //     name: "Hackathon",
  //     img: "https://source.unsplash.com/random",
  //   },
  //   {
  //     name: "Office Event",
  //     img: "https://www.accelevents.com/wp-content/uploads/2021/06/Virtual-Events-in-2021-1.gif",
  //   },
  //   {
  //     name: "Busninees Event",
  //     img: "https://source.unsplash.com/random",
  //   },
  //   {
  //     name: "Hackathon",
  //     img: "https://source.unsplash.com/random",
  //   },
  //   {
  //     name: "Office Event",
  //     img: "https://www.accelevents.com/wp-content/uploads/2021/06/Virtual-Events-in-2021-1.gif",
  //   },
  //   {
  //     name: "Busninees Event",
  //     img: "https://source.unsplash.com/random",
  //   },
  //   {
  //     name: "Hackathon",
  //     img: "https://source.unsplash.com/random",
  //   },
  //   {
  //     name: "Office Event",
  //     img: "https://www.accelevents.com/wp-content/uploads/2021/06/Virtual-Events-in-2021-1.gif",
  //   },
  //   {
  //     name: "Busninees Event",
  //     img: "https://source.unsplash.com/random",
  //   },
  // ];

  return (
    <div style={{backgroundColor:"#c8d8e4"}}>
      {/* <CssBaseline /> */}
      <div className="ml-16 " >
        <Typography variant="h3" className="pb-8 pt-8" >
          Explore Events
        </Typography>
      </div>
      <div classname="flex-row mb-8">
        <Button
          variant="outlined"  className={`${classes.btnHover}`} 
          style={{
            marginLeft: "70px",
            borderRadius: "10px",
          }}
          color="primary"
        >
          Online Event
        </Button>
        <Button
          variant="outlined"
          style={{
            marginLeft: "10px",
            borderRadius: "10px",
            transitions,
          }}
          color="primary"
        >
          Venue Event
        </Button>
      </div>

      <div>
        {/* End hero unit */}
        <Carousel
          autoPlaySpeed={2000}
          enableAutoPlay={true}
          breakPoints={breakpoints}
        >
          {props.events.map((event) => (
            // <Grid item key={card} xs={12} sm={6} md={4}>
            // <div className="flex">
            <Card className={classes.card}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={event.event_name}
                subheader={event.event_min_date}
              />
              {console.log(
                Buffer.from(event.display_image.data).toString("base64")
              )}
              <CardMedia
                className={classes.cardMedia}
                image={`data:image/jpg;base64,${Buffer.from(
                  event.display_image.data
                ).toString("base64")}`}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>{event.event_detail}</Typography>
              </CardContent>
              {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
              <CardActions disableSpacing>
                <Button color="primary" variant="contained" href="/BookingForm">
                  Book Now
                </Button>

                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>

                <Typography
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <InfoOutlinedIcon />
                </Typography>
                {/* </IconButton> */}
              </CardActions>

              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                // anchorPosition="left"
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <div>
                  <Typography>Details:</Typography>
                  <Typography>{event.event_more_detail}</Typography>
                </div>
              </Popover>
            </Card>
            // </div>
          ))}
        </Carousel>

      </div>
      {/* End footer */}
  <UpcomingEvent />
    </div>
    
  );
 
};

const mapStateToProps = (state) => {
  return {
    events: state.event.events,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
