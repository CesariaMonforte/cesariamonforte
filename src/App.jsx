import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./_pages/Home/Home";
import Forge from "./_pages/Projects/Forge/Forge";
import Mosaic from "./_pages/Projects/Mosaic/Mosaic";
import Work from "./_pages/Work/Work";
import About from "./_pages/About/About";
import Brewly from "./_pages/Projects/Brewly/Brewly";
import Tannacious from "./_pages/Projects/Tannacious/Tannacious";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects/Forge/Forge" element={<Forge />} />
        <Route path="/Projects/Mosaic/Mosaic" element={<Mosaic />} />
        <Route path="/Projects/Brewly/Brewly" element={<Brewly />} />
        <Route path="/Projects/Tannacious/Tannacious" element={<Tannacious />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
