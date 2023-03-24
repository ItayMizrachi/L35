import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components_general/Header";
import StudentPage from "../comps_students/StudentPage";
import DataListPage from "../datalist_comps/DataListPage";
import AddHumanPage from "../human_comps/AddHumanPage";
import EditHumanPage from "../human_comps/EditHumanPage";
import HumansPage from "../human_comps/HumansPage";
import Home from "./Home";
import Page404 from "./Page404";

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="student" element={<StudentPage />} />
        <Route path="datalist" element={<DataListPage />} />
        <Route path="humans" element={<HumansPage />} />
        <Route path="humans/add" element={<AddHumanPage />} />
        <Route path="humans/edit/:id" element={<EditHumanPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
