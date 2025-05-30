import React from "react";
import Home from "./Pages/Home";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/common/Navbar/Index";
import About from "./Pages/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </>
  );
};

export default App;
