import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GridDownloadIcon } from "@mui/x-data-grid";
import { Box, Paper, Stack, useTheme } from "@mui/material";
import LineChart from "./LineChart";
import Card from "./Card";
import Balances from "./Balances";
import Row2 from "./Row2";
import Row3 from "./Row3";

function Dashboard() {
  const theme = useTheme();
  return (
    <Stack flexDirection={"column"}>
      <Stack>
        <Typography variant="h3" color={theme.palette.main}>
          DASHBOARD
        </Typography>
        <Typography variant="p" color={theme.palette.primary.main}>
          Welcome to your dashboard
        </Typography>
      </Stack>
      <Stack alignItems={"end"} my={3}>
        <Button variant="contained">
          <GridDownloadIcon></GridDownloadIcon>
          Download Report
        </Button>
      </Stack>
      <Stack flexWrap={"wrap"} flexDirection={"row"}  gap={2}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Stack>
        <Row2></Row2>
        <Row3></Row3>
    </Stack>
  );
}

export default Dashboard;
