import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { Avatar, Stack } from "@mui/material";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

function DrawerComp({ handleDrawerClose, open }) {
  const Navigate = useNavigate();
  const theme = useTheme();
  const array1 = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlineOutlinedIcon />, path: "/Team" },
    {
      text: "Contacts Information",
      icon: <ContactsOutlinedIcon />,
      path: "/Contacts",
    },
    {
      text: "Invoices Balances",
      icon: <ReceiptOutlinedIcon />,
      path: "/Balances",
    },
  ];
  const array2 = [
    { text: "Profile Form", icon: <Person2OutlinedIcon />, path: "/Profile" },
    {
      text: "Calender",
      icon: <CalendarMonthOutlinedIcon />,
      path: "/Calender",
    },
    { text: "FAQ Page", icon: <QuizOutlinedIcon />, path: "/FAQ" },
  ];
  const array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/BarChart" },
    {
      text: "Pie Chart",
      icon: <PieChartOutlineOutlinedIcon />,
      path: "/PieChart",
    },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/LineChart" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Stack
          direction="column"
          spacing={2}
          justifyContent={"center"}
          my={"1rem"}
          alignItems={"center"}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://picsum.photos/id/870/200/300"
            sx={{
              width: open ? 88 : 44,
              height: open ? 88 : 44,
              my: "1",
              border: "solid white 2px",
            }}
          />
          <Typography
            align="center"
            variant="body1"
            sx={{
              fontSize: open ? 14 : 0,
              transition: "0.25s",
            }}
          >
            Ayman Kamal
          </Typography>
          <Typography
            align="center"
            variant="body1"
            sx={{
              fontSize: open ? 14 : 0,
              transition: "0.25s",
              color: theme.palette.info.main,
            }}
          >
            Admin
          </Typography>
        </Stack>

        <Divider />
        <List>
          {array1.map((text) => (
            <ListItem key={text.path} disablePadding sx={{ display: "block" }}>
              <NavLink
                to={text.path}
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                }}
              >
                {({ isActive }) => (
                  <ListItemButton
                    onClick={() => {
                      Navigate(text.path);
                    }}
                    className={isActive ? "active" : ""}
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                      },
                      open
                        ? {
                            justifyContent: "initial",
                          }
                        : {
                            justifyContent: "center",
                          },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",
                        },
                        open
                          ? {
                              mr: 3,
                            }
                          : {
                              mr: "auto",
                            },
                      ]}
                    >
                      {text.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text.text}
                      sx={[
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {array2.map((text) => (
            <ListItem key={text.path} disablePadding sx={{ display: "block" }}>
              <NavLink
                to={text.path}
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                }}
              >
                {({ isActive }) => (
                  <ListItemButton
                    onClick={() => {
                      Navigate(text.path);
                    }}
                    className={isActive ? "active" : ""}
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                      },
                      open
                        ? {
                            justifyContent: "initial",
                          }
                        : {
                            justifyContent: "center",
                          },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",
                        },
                        open
                          ? {
                              mr: 3,
                            }
                          : {
                              mr: "auto",
                            },
                      ]}
                    >
                      {text.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text.text}
                      sx={[
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {array3.map((text) => (
            <ListItem key={text.path} disablePadding sx={{ display: "block" }}>
              <NavLink
                to={text.path}
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                }}
              >
                {({ isActive }) => (
                  <ListItemButton
                    onClick={() => {
                      Navigate(text.path);
                    }}
                    className={isActive ? "active" : ""}
                    sx={[
                      {
                        color: theme.palette.text.primary,
                        minHeight: 48,
                        px: 2.5,
                      },
                      open
                        ? {
                            justifyContent: "initial",
                          }
                        : {
                            justifyContent: "center",
                          },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",
                        },
                        open
                          ? {
                              mr: 3,
                            }
                          : {
                              mr: "auto",
                            },
                      ]}
                    >
                      {text.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text.text}
                      sx={[
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader></DrawerHeader>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

export default DrawerComp;
