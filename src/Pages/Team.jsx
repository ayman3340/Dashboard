import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
function Team() {
  const theme = useTheme();

  const rows = [
    {
      id: 1,
      name: "Data Grid",
      email: "the Community version",
      age: "12",
      phone: "090758345",
      access: "Admin",
    },
    {
      id: 2,
      name: "Data Grid Pro",
      email: "the Pro version",
      age: "12",
      phone: "090758345",
      access: "Admin",
    },
    {
      id: 3,
      name: "Data Grid Premium",
      email: "the Premium version",
      age: "12",
      phone: "090758345",
      access: "Admin",
    },
    {
      id: 4,
      name: "Data Grid Premium",
      email: "the Premium version",
      age: "12",
      phone: "090758345",
      access: "user",
    },
    {
      id: 5,
      name: "Data Grid Premium",
      email: "the Premium version",
      age: "12",
      phone: "090758345",
      access: "user",
    },
    {
      id: 6,
      name: "Data Grid Premium",
      email: "the Premium version",
      age: "12",
      phone: "090758345",
      access: "manger",
    },
    {
      id: 7,
      name: "Data Grid Premium",
      email: "the Premium version",
      age: "12",
      phone: "090758345",
      access: "Admin",
    },
    {
      id: 8,
      name: "Data Grid Premium",
      email: "the Premium version",
      age: "12",
      phone: "090758345",
      access: "user",
    },
    {
      id: 9,
      name: "Data Grid Premium",
      email: "the Premium version",
      age: "12",
      phone: "090758345",
      access: "manger",
    },
    {
      id: 10,
      name: "Data Grid Premium",
      email: "the Premium version",
      age: "12",
      phone: "090758345",
      access: "manger",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "id",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "name",
      headerName: "name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "age",
      headerName: "age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      headerAlign: "center",
      align: "center",

      renderCell: (e) => {
        return (
          <Box
            sx={{
              p: "5px",
              borderRadius: "8px",
              // bgcolor:
              //   // theme.palette.primary.main
              //   "green",
              // // e.row.access :: "Admin" ? theme.palette.primary.main : "green"
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" 
                    sx={{
              p: "5px",
              borderRadius: "3px",
              bgcolor: e.row.access == "Admin" ? theme.palette.primary.dark : e.row.access == 'user' ?"green":'red',
              display: "flex",
              justifyContent: "space-evenly",
              width:'110px',
              fontSize:"15px"
            }}
            >
                  {e.row.access == "Admin" &&  <LockIcon fontSize="small" sx={{mx:0.5}}></LockIcon>}       
                  {e.row.access == "user" &&  <PersonOutlineIcon fontSize="small" sx={{mx:0.5}}></PersonOutlineIcon>}       
                  {e.row.access == "manger" &&  <SupervisorAccountIcon fontSize="small" sx={{mx:0.5}}></SupervisorAccountIcon>}       
              {e.row.access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      <div style={{ height: 660, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default Team;
