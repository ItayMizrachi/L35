import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components_general/Header";
import Father from "./Father";
import Home from "./Home";
import Page2 from "./Page2";
import Page404 from "./Page404";
import Son from "./Son";

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="page-2" element={<Page2 />} />
        <Route path="father" element={<Father />}>
          <Route path="son" element={<Son />} />
          <Route path="another-son" element={<h2>Another Son</h2>} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
