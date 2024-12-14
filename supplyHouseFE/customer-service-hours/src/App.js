// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ManageSpecialHours from "./pages/ManageSpecialHours";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-special-hours" element={<ManageSpecialHours />} />
      </Routes>
    </Router>
  );
};

export default App;
