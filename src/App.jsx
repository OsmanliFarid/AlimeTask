import React from "react";
import Home from "./Pages/Home";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/common/Navbar/Index";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
};

export default App;
