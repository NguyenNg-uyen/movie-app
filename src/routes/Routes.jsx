import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import { ThemeProvider } from "@mui/material/styles";
export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
    </Routes>
  );
}
