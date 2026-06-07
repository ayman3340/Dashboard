import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PieChart as PieCharts, Pie } from "recharts";
import { DataGrid } from "@mui/x-data-grid";
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

// #region Sample data
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

function Card({ isAnimationActive = true, hide }) {
   
  return (

      <Stack flexDirection={"row"} justifyContent={"space-between"} my={2} flexGrow={1}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            minWidth: "333px",
            p: 1,
            flexGrow:1
          }}
        >
          <Stack flexDirection={"column"} justifyContent={"center"} mx={1}>
            <EmailIcon></EmailIcon>
            <Typography variant="body1" my={1.5}>
              12,361
            </Typography>
            <Typography variant="body1">Email Send</Typography>
          </Stack>
          <Stack
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            mx={1}
          >
            <Stack
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              mx={1}
              width={"100px"}
              height={"100px"}
            >
              <PieCharts
                style={{
                  width: "290%",
                  maxWidth: "400px",
                  maxHeight: "80vh",
                  aspectRatio: 1.618
                }}

                responsive
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
              >
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="50%"
                  fill="#8884d8"
                  isAnimationActive={isAnimationActive}
         
                />
                <Pie
                  data={data02}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  fill="#82ca9d"
                  label={hide}
                  isAnimationActive={isAnimationActive}
                />
              </PieCharts>
            </Stack>

            <Typography variant="body1">+14%</Typography>
          </Stack>
        </Paper>
      </Stack>
  );
}

export default Card;





