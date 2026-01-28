import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./_pages/Home/Home";
import Forge from "./_pages/Projects/Forge/Forge";
import Mosaic from "./_pages/Projects/Mosaic/Mosaic";
import Work from "./_pages/Work/Work";
import About from "./_pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects/Forge/Forge" element={<Forge />} />
        <Route path="/Projects/Mosaic/Mosaic" element={<Mosaic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
