import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Stack } from "@mui/material";

import {
  LineChart as LineCharts,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
// #endregion

function Row2() {
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
      age: "34",
      phone: "090758345",
      access: "Admin",
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                p: "5px",
                borderRadius: "3px",
                bgcolor:
                  e.row.access == "Admin"
                    ? theme.palette.primary.dark
                    : e.row.access == "user"
                    ? "green"
                    : "red",
                display: "flex",
                justifyContent: "space-evenly",
                width: "110px",
                fontSize: "15px",
              }}
            >
              {e.row.access == "Admin" && (
                <LockIcon fontSize="small" sx={{ mx: 0.5 }}></LockIcon>
              )}
              {e.row.access == "user" && (
                <PersonOutlineIcon
                  fontSize="small"
                  sx={{ mx: 0.5 }}
                ></PersonOutlineIcon>
              )}
              {e.row.access == "manger" && (
                <SupervisorAccountIcon
                  fontSize="small"
                  sx={{ mx: 0.5 }}
                ></SupervisorAccountIcon>
              )}
              {e.row.access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
<Stack
  direction="row"
  flexWrap="wrap"
  justifyContent="space-between"
  gap={2} 
>
  {/* --- Left Side: Chart (Takes ~65% of space on desktop) --- */}
  <Paper
    elevation={3}
    sx={{
      width: { xs: "100%", md: "60%" },
      flexGrow: 1, 
      minWidth: "300px", // Prevents it from getting too squashed
    }}
  >
    <LineCharts
      style={{
        display: "flex",
        width: "100%",
        minHeight: "350px", // Ensure height matches the Grid roughly
      }}
      responsive
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineCharts>
  </Paper>

  {/* --- Right Side: Data Grid (Takes ~30% of space on desktop) --- */}
  <Box
    sx={{
      height: 350,
      width: { xs: "100%", md: "35%" },
      flexGrow: 1,
      minWidth: "300px",
    }}
  >
    <DataGrid 
      rows={rows} 
      columns={columns} 
      showToolbar 
      checkboxSelection 
    />
  </Box>
</Stack>
  );
}

export default Row2;
