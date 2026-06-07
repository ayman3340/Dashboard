import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contacts from "./Pages/Contacts.jsx";
import LineChart from "./Pages/LineChart.jsx";
import PieChart from "./Pages/PieChart.jsx";
import BarChart from "./Pages/BarChart.jsx";
import FAQ from "./Pages/FAQ.jsx";
import Calender from "./Pages/Calender.jsx";
import Profile from "./Pages/Profile.jsx";
import Balances from "./Pages/Balances.jsx";
import Team from "./Pages/Team.jsx";
import Dashboard from "./Pages/Dashboard.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Sub-routes go here */}
      <Route index  element={<Dashboard />}></Route>
      <Route path="/Contacts" element={<Contacts />}></Route>
      <Route path="/LineChart" element={<LineChart />}></Route>
      <Route path="/PieChart" element={<PieChart hide={true}/>}></Route>
      <Route path="/BarChart" element={<BarChart />}></Route>
      <Route path="/FAQ" element={<FAQ />}></Route>
      <Route path="/Calender" element={<Calender />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/Balances" element={<Balances />}></Route>
      <Route path="/Team" element={<Team />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
