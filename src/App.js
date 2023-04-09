import React from "react"
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import "./App.css"
// Pages
import Home from "./pages/Home"
// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      {/* Routes of website pages */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
