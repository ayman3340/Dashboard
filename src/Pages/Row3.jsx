import { Box, Stack } from "@mui/material";

import {
  BarChart as BarCharts,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import { useTheme } from "@emotion/react";
const chartData = [
  { x: 5, y: 1508 },
  { x: 6, y: 107 },
  { x: 7, y: 325 },
  { x: 8, y: 439 },
  { x: 9, y: 982 },
  { x: 10, y: 1562 },
  { x: 11, y: 50 },
];

import { Pie, PieChart } from "recharts";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// #region Sample data
const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

// #endregion

// #region Sample data
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

const Label = (props) => {
  const { x, y, value } = props;

  return (
    <text
      x={x}
      y={y}
      dx={"2%"}
      dy={"-1%"}
      fontSize="15"
      fontWeight="bold"
      fill={"#181818"}
      textAnchor="left"
    >
      {value}
    </text>
  );
};

function Row3({ isAnimationActive = true }) {
  const theme = useTheme();
  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill={theme.palette.primary.main}
        textAnchor="middle"
        dy={-6}
      >
        {" "}
        ${value}
      </text>
    );
  };

  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      my={1}
      gap={1}
      flexWrap={"wrap"}
    >
      <Stack
        minWidth={"200px"}
        minHeight={"400px"}
        height={"auto"}
        flex={'1 1 400px'}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <BarCharts
          style={{
            width: "100%",
            aspectRatio: 1.618,
            maxWidth: 800,
            margin: "auto",
          }}
          responsive
          data={chartData}
        >
          <CartesianGrid strokeDasharray="3 4" />
          <XAxis
            tick={{ fontSize: 8 }}
            dataKey="x"
            type="number"
            domain={[4.5, 13.5]}
            ticks={[5, 6, 7, 8, 9, 10, 11, 12, 13]}
            tick={{ fill: "red" }}
          />
          <YAxis tick={{ fill: "red" }} />
          <Bar dataKey="y" fill="#8884d8" label={renderCustomBarLabel} />
        </BarCharts>
      </Stack>
      <Stack
        minWidth={"337px"}
        minHeight={"400px"}
        height={"auto"}
        flex={'1 2 400px'}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <PieChart
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "800px",
            maxHeight: "80vh",
            aspectRatio: 1.618,
          }}
          responsive
        >
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius="50%"
            fill="#8884d8"
            isAnimationActive={isAnimationActive}
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            fill="#82ca9d"
            label
            isAnimationActive={isAnimationActive}
          />
        </PieChart>
      </Stack>
      <Stack
        minWidth={"337px"}
        minHeight={"400px"}
        height={"auto"}
        flex={'1 2 400px'}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <RadarChart
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "800px",
            maxHeight: "80vh",
            aspectRatio: 1.618,
          }}
          responsive
          outerRadius="80%"
          data={data}
          margin={{
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
          }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </Stack>
    </Stack>
  );
}

export default Row3;
