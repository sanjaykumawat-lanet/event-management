import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { IconButton, Typography } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
// import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount, actions) {
  return { id, date, name, shipTo, paymentMethod, amount, actions };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44,
    <IconButton>
      <EditOutlinedIcon />
      <DeleteOutlinedIcon />
    </IconButton>
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99,
    <IconButton>
      <EditOutlinedIcon />
      <DeleteOutlinedIcon />
    </IconButton>
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81,
    <IconButton>
      <EditOutlinedIcon />
      <DeleteOutlinedIcon />
    </IconButton>
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39,
    <IconButton>
      <EditOutlinedIcon />
      <DeleteOutlinedIcon />
    </IconButton>
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79,
    <IconButton>
      <EditOutlinedIcon />
      <DeleteOutlinedIcon />
    </IconButton>
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const Organiserlist = () => {
  const classes = useStyles();
  return (
    <div className="m-8 mt-8">
      <Typography variant="h5" className="pb-4" style={{color:"#800000"}}>
        Event List
      </Typography>
      <Table size="small">
        <TableHead >
          <TableRow >
            <TableCell style={{fontWeight: "bold"}}>Date</TableCell>
            <TableCell style={{fontWeight: "bold"}}>Name</TableCell>
            <TableCell style={{fontWeight: "bold"}}>Ship To</TableCell>
            <TableCell style={{fontWeight: "bold"}}>Payment Method</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Sale Amount</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
      </div>
    </div>
  );
}
export default Organiserlist
