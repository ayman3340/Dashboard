import Box from "@mui/material/Box";
import DrawerComp from "./Component/DrawerComp";
import { useState } from "react";
import TopBar from "./Component/TopBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const theme = createTheme({
    palette: {
      mode: localStorage.getItem("mode")
        ? localStorage.getItem("mode")
        : darkTheme
        ? "dark"
        : "light",
    },
  });

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }} variant="type1">
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setDarkTheme={setDarkTheme}
        ></TopBar>
        <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
          {/* border:"solid red 10px" */}
          <DrawerComp
            open={open}
            handleDrawerClose={handleDrawerClose}
          ></DrawerComp>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
