import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginAdmin from "../admin/LoginAdmin";
import Header from "../components_general/Header";
import Home from "./Home";
import Page404 from "./Page404";

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="admin" element={<LoginAdmin />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
