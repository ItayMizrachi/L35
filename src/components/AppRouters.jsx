import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components_general/Header";
import Home from "./Home";
import Page404 from "./Page404";

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
