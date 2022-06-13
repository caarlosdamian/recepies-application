import React from "react";
import { Home } from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Cuisine } from "./Cuisine";

export const Pages = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    
  );
};