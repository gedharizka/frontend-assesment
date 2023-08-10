import {  Button,  Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from './pages/home'

const Dashboard = () => {
  return (
    <>
      <Typography>Dashboard</Typography>
      <Button variant="contained">Ok</Button>
    </>
  );
};

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
