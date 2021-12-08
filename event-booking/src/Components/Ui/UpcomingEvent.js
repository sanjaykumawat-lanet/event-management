// import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
// import { Avatar, CardHeader, IconButton, Popover } from "@material-ui/core";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import Carousel from "react-elastic-carousel";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import UpcomingEvent from "./UpcomingEvent"
// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
 
 
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     boxShadow: "1px 2px 5px grey",
//     margin: "10px",
//   },
//   cardMedia: {
//     paddingTop: "56.25%", // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
//   popover: {
//     pointerEvents: "none",
//   },
//   paper: {
//     padding: theme.spacing(1),
//   },
//   carousel: {
//     justifyContent: "center",
//     "& .thumbs-wrapper": {
//       display: "none",
//     },
//     "& .carousel-status": {
//       display: "none",
//     },
//   },
// }));
// const breakpoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 4 },
//   { width: 1200, itemsToShow: 4 },
// ];
// const Upcoming = () => {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const card = [

//     {
//       name: "Hackathon",
//       img: "https://source.unsplash.com/random",
//     },
//     {
//       name: "Office Event",
//       img: "https://www.accelevents.com/wp-content/uploads/2021/06/Virtual-Events-in-2021-1.gif",
//     },
//     {
//       name: "Busninees Event",
//       img: "https://source.unsplash.com/random",
//     },
//     {
//       name: "Hackathon",
//       img: "https://source.unsplash.com/random",
//     },
//     {
//       name: "Office Event",
//       img: "https://www.accelevents.com/wp-content/uploads/2021/06/Virtual-Events-in-2021-1.gif",
//     },
//     {
//       name: "Busninees Event",
//       img: "https://source.unsplash.com/random",
//     },
//     {
//       name: "Hackathon",
//       img: "https://source.unsplash.com/random",
//     },
//     {
//       name: "Office Event",
//       img: "https://www.accelevents.com/wp-content/uploads/2021/06/Virtual-Events-in-2021-1.gif",
//     },
//     {
//       name: "Busninees Event",
//       img: "https://source.unsplash.com/random",
//     },
//   ];

//   return (
//     <div>
//       {/* <CssBaseline /> */}
//       <div className="ml-16 ">
//         <Typography variant="h3" className="pb-8 pt-8">
//           Explore Events
//         </Typography>
//       </div>
//       <div classname="flex-row mb-8">
//         <Button
//           variant="outlined"
//           style={{
//             marginLeft: "70px",
//             borderRadius: "10px",
//           }}
//           color="primary"
//         >
//           Online Event
//         </Button>
//         <Button
//           variant="outlined"
//           style={{
//             marginLeft: "10px",
//             borderRadius: "10px",
//           }}
//           color="primary"
//         >
//           Venue Event
//         </Button>
//       </div>

//       <div>
//         {/* End hero unit */}
//         <Carousel
//           autoPlaySpeed={2000}
//           enableAutoPlay={true}
//           breakPoints={breakpoints}
//         >
//           {card.map((card) => (
//             // <Grid item key={card} xs={12} sm={6} md={4}>
//             // <div className="flex">
//             <Card className={classes.card}>
//               <CardHeader
//                 action={
//                   <IconButton aria-label="settings">
//                     <MoreVertIcon />
//                   </IconButton>
//                 }
//                 title={card.name}
//                 // subheader={card.event_min_date}
//               />
//               {console.log(
//                 Buffer.from(card.img).toString("base64")
//               )}
//               <CardMedia
//                 className={classes.cardMedia}
//                 image={card.img}
//                 title="Image title"
//               />
//               <CardContent className={classes.cardContent}>
//                 <Typography>{card.detail}</Typography>
//               </CardContent>
//               {/* <CardActions>
//                     <Button size="small" color="primary">
//                       View
//                     </Button>
//                     <Button size="small" color="primary">
//                       Edit
//                     </Button>
//                   </CardActions> */}
//               <CardActions disableSpacing>
//                 <Button color="primary" variant="contained" href="/BookingForm">
//                   Book Now
//                 </Button>

//                 <IconButton aria-label="add to favorites">
//                   <FavoriteIcon />
//                 </IconButton>
//                 <IconButton aria-label="share">
//                   <ShareIcon />
//                 </IconButton>

//                 <Typography
//                   aria-owns={open ? "mouse-over-popover" : undefined}
//                   aria-haspopup="true"
//                   onMouseEnter={handlePopoverOpen}
//                   onMouseLeave={handlePopoverClose}
//                 >
//                   <InfoOutlinedIcon />
//                 </Typography>
//                 {/* </IconButton> */}
//               </CardActions>

//               <Popover
//                 id="mouse-over-popover"
//                 className={classes.popover}
//                 // anchorPosition="left"
//                 classes={{
//                   paper: classes.paper,
//                 }}
//                 open={open}
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 onClose={handlePopoverClose}
//                 disableRestoreFocus
//               >
//                 <div>
//                   <Typography>Details:</Typography>
//                   <Typography>{card.detail}</Typography>
//                 </div>
//               </Popover>
//             </Card>
//             // </div>
//           ))}
//         </Carousel>

//       </div>
//       {/* End footer */}
//       <UpcomingEvent />
//     </div>
    
//   );
 
// };

// export default Upcoming


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { Carousel } from 'react-responsive-carousel';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     boxShadow: "1px 2px 5px grey",
//     margin: "10px",
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     boxShadow: "1px 2px 5px grey",
//     margin: "10px",
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
//   carousel: {
//         justifyContent: "center",
//         "& .thumbs-wrapper": {
//           display: "none",
//         },
//         "& .carousel-status": {
//           display: "none",
//         },
//       },
  
// }));

// export default function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const breakpoints = [
//       { width: 1, itemsToShow: 1 },
//       { width: 550, itemsToShow: 2 },
//       { width: 768, itemsToShow: 4 },
//       { width: 1200, itemsToShow: 4 },
//     ];

//     const [anchorEl, setAnchorEl] = React.useState(null);

//       const handlePopoverOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//       };
    
//       const handlePopoverClose = () => {
//         setAnchorEl(null);
//       };
    
//       const open = Boolean(anchorEl);
//       const card = [
    
//         {
//           name: "Hackathon",
//           img: "https://source.unsplash.com/random",
//         },
//         {
//           name: "Office Event",
//           img: "https://www.accelevents.com/wp-content/uploads/2021/06/Virtual-Events-in-2021-1.gif",
//         },
//         {
//           name: "Busninees Event",
//           img: "https://source.unsplash.com/random",
//         },
//         {
//           name: "Hackathon",
//           img: "https://source.unsplash.com/random",
//         },
//         {
//           name: "Office Event",
//           img: "https://www.accelevents.com/wp-content/uploads/2021/06/Virtual-Events-in-2021-1.gif",
//         },
//         {
//           name: "Busninees Event",
//           img: "https://source.unsplash.com/random",
//         },
//         {
//           name: "Hackathon",
//           img: "https://source.unsplash.com/random",
//         },
//         {
//           name: "Office Event",
//           img: "https://www.accelevents.com/wp-content/uploads/2021/06/Virtual-Events-in-2021-1.gif",
//         },
//         {
//           name: "Busninees Event",
//           img: "https://source.unsplash.com/random",
//         },
//       ]
//   return (
//     <div>
//            {/* <CssBaseline /> */}
//            <div className="ml-16 ">
//              <Typography variant="h3" className="pb-8 pt-8">
//                Upcoming Events.....        </Typography>
//            </div>
//            <div classname="flex-row mb-8">
            
          
//     <Carousel
//           autoPlaySpeed={2000}
//           enableAutoPlay={true}
//           breakPoints={breakpoints}
//         >
//           {card.map((card) => (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={card.name}
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image={card.img}
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//           ))}
//     </Carousel>
//     </div>
//     </div>
//   );
// }





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
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    height: "fixedHeight",
    // color:"white"
  },
  card: {
    height: "fixedHeight",
    display: "flex",
    flexDirection: "column",
    boxShadow: "1px 2px 5px grey",
    margin: "10px",
    // backgroundColor:"#2b6777",
    // color:"white"
  },
  cardMedia: {
    paddingTop: "56.25%",
    height: "fixedHeight",
    // backgroundColor:"#2b6777",
    // color:"white" // 16:9
  },
  cardBox:{
   "& .izuVIe":{
   height: "100%",
   },
  },
  cardContent: {
    flexGrow: 1,
    height: "fixedHeight",
    // backgroundColor:"#2b6777"
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
}));
const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];
const UpcomingEvents = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const card = [

    {
      name: "Hackathon",
      img: "https://source.unsplash.com/random",
    },
    {
      name: "Office Event",
      img: "https://source.unsplash.com/random",
    },
    {
      name: "Busninees Event",
      img: "https://source.unsplash.com/random",
    },
    {
      name: "Hackathon",
      img: "https://source.unsplash.com/random",
    },
    {
      name: "Office Event",
      img: "https://source.unsplash.com/random",
    },
    
  ];

  return (
    <div>
      {/* <CssBaseline /> */}
      <div className="mx-16 flex p-4 font-black justify-between" >
          <Typography variant="h4" >UPCOMING EVENTS..... </Typography>

          <Typography variant="h5" className="">
            Cities-
            <Button
            variant="text">
              
              </Button>
          
          </Typography>
        </div>
      {/* <div className="ml-16 ">
        <Typography variant="h3" className="pb-8 pt-8">
          Upcoming Events.....        </Typography>
      </div> */}
      <div classname={`flex-row mb-8 ${classes.cardBox}`}>
        {/* End hero unit */}
        <Carousel
          autoPlaySpeed={2000}
          enableAutoPlay={true} className="h-full"
          breakPoints={breakpoints}
        >
          {card.map((card) => (
            // <Grid item key={card} xs={12} sm={6} md={4}>
            // <div className="flex">
            <Card className={classes.card}>
              <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={card.name}
        subheader="September 14, 2016"
      />
              {/* {console.log(
                Buffer.from(card.display_image.data).toString("base64")
              )} */}
              <CardMedia
                className={classes.cardMedia}
                    image={card.img}
              />
               <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" >
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
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
                <Button color="primary" variant="contained" href="/BookingForm" >
                  View
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
                  <InfoOutlinedIcon style={{marginLeft:"50px"}} />
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
                <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
                </div>
              </Popover>
            </Card>
            // </div>
          ))}
        </Carousel>

      </div>
      {/* End footer */}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEvents);
