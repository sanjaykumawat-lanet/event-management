import React from "react";
import { useEffect } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Avatar, IconButton, Paper, TablePagination, Tooltip, Typography } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import {  getAllUsers } from "../store/action/uiActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
// import { useEffect } from "react";
// import Title from "./Title";


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const User = (props) => {
  const {getAllUsers, userList} = props;
  const classes = useStyles();

  console.log("userList", userList);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    getAllUsers(5,0);
  }, []);

  const handleChangePage = async (event, newPage) => {
    console.log(newPage, page);
    if (newPage > page &&   props.totalRecords > userList.length) {
      await props.getAllUsers(rowsPerPage, rowsPerPage * newPage);
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("handleChangeRowsPerPage");
    if (userList.length !== event.target.value &&
      props.totalRecords > userList.length) {
      props.listreset();
      props.getAllUsers(event.target.value, 0);
    }
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const setValueDebounced = useDebouncedCallback(async (first_name) => {
  //   // console.log("name", props);
  //   // const resp = await searchEmployee(first_name);
  //   // console.log("name", first_name);
  //   if(first_name.length===0||first_name.length>=3){
  //     props.listreset();
  //     await props.search(first_name);
  //     const resp = await props.getAllUsers();
  //   }
  // }, 400);
  // const searchHandler = (event) => {
  //   const first_name = event.target.value.trim().toLowerCase();
  //   console.log("name", first_name);
  //   setValueDebounced(first_name);
  // };

  return (
    <div className="m-4 pt-4">
     <Typography variant="h5" className="pb-4" style={{color:"#800000"}}>
        User List
      </Typography>
      <Table
          className="bg-gray-500 p-0 shadow-2xl"
        // class="border-4 border-light-blue-500 border-opacity-100"
        >
          <TableHead className="flex w-full">
            <TableRow className="flex w-full">
              <TableCell
                className="w-1/7 justify-center items-center text-white "
                // align="center"
              >
                Profile Picture
              </TableCell>
              <TableCell
                className="w-1/7 items-center justify-center text-white "
                // align="center"
              >
                First Name
              </TableCell>
              <TableCell
                className=" w-2/7 items-center justify-center text-white "
                // align="center"
              >
                Last Name
              </TableCell>

              <TableCell
                className=" w-1/7 items-center justify-start text-white "
                align="center"
              >
                Email
              </TableCell>

              {/* <TableCell
                className=" w-1/12 items-center justify-start text-white "
                // align="center"
              >
                Password
              </TableCell> */}

              <TableCell
                className="w-1/7  items-center justify-start text-white "
                // align="center"
              >
                Phone 
              </TableCell>
              <TableCell
                className="w-1/7  items-center justify-start text-white "
                // align="center"
              >
                Actions
              </TableCell>
              
            </TableRow>
          </TableHead>
        </Table>

        {/* <InfiniteScroll
          // pageStart={0}
          dataLength={employeeList.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            !isLoading && (
              <div className="flex flex-row justify-center align-center">
                <CircularProgress color="secondary" />
              </div>
            )
          }
          height={400}
          endMessage={
            <p style={{ textAlign: "right" }}>
              <b>You have Reached the Maximum Limit</b>
            </p>
          }
        > */}

        {userList && userList?.length !== 0 ? (
          userList
            .map((val, count) => (
              <Table className="p-0 shadow-2xl flex w-full" key={val._id}>
                <TableBody
                  className={`border-1 border-gray-300 hover:bg-grey-300 shadow-lg w-auto m-0 p-0 justify-start flex w-full  ${count % 2 == 0 ? `bg-blue-50` : `bg-white `
                    } `}
                >
                  <TableRow className="p-0 flex w-full">
                    <TableCell className="w-1/7 flex justify-center items-center  ">
                      {/* <Avatar
                      // className="mt-8 p-16"
                      //align="center"
                      // alt={val?.name?.trim().split(" ")[1][0]}
                      // src={`http://localhost:3001/employee/upload?empId=${val.id}`}
                      >
                        {val.first_name?.charAt(0)}
                      </Avatar> */}
                      <Avatar  alt={val.first_name}
                      src={`data:image/jpg;base64,${val.displayImage}`}/>
                    </TableCell>
                    <TableCell className="w-1/7 flex items-center justify-center">{val.first_name}</TableCell>
                    <TableCell className="w-1/7 justify-center items-center flex ">{val.last_name}</TableCell>
                    <TableCell className=" w-2/7 flex ">
                    <Tooltip title={val.email}>
                      <div
                        className="flex w-full justify-start items-center"
                      >
                        <IconButton>
                          <EmailIcon />
                        </IconButton>
                        <span className="truncate">{val.email}</span>
                      </div>
                      </Tooltip>
                    </TableCell>

                    <TableCell className="flex  w-1/7 justify-start items-start ">
                        {/* <span className="truncate">{val.phone}</span> */}
                      {val.phone}
                      {/* </Tooltip> */}
                    </TableCell>
                    <TableCell className="flex  w-1/7 justify-center items-center ">
                      <IconButton className=" p-2">
                        {<EditIcon />}
                      </IconButton>
                      <IconButton>
                        {<DeleteIcon />}
                        {/* <DeleteIcon /> */}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ))): (
           
                <TableCell className="w-full">
                  <Paper className="flex p-24 w-full" >
                    <h2 className="flex w-full justify-center items-center"> No Employees Found!</h2>
                  </Paper>
                </TableCell>
              )}
              <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={ props.searchfilterrec
            ? props.searchfilterrec
            : props.totalRecords}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      <div className={classes.seeMore}>
       
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state.ui.",state);
  return {
    organiserDialog: state.ui.organiserDialog,
    userList:state.ui?.userList
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllUsers
    },
    dispatch
  );
;
};

export default connect(mapStateToProps, mapDispatchToProps)(User);