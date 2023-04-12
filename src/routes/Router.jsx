import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthAdminComp from "../admin/AuthAdminComp";
import AddCategory from "../admin/categories/AddCategory";
import CategoriesList from "../admin/categories/CategoriesList";
import EditCategory from "../admin/categories/EditCategory";
import HeaderAdmin from "../admin/HeaderAdmin";
import LoginAdmin from "../admin/LoginAdmin";
import UsersList from "../admin/UsersList";
import Header from "../components/Header";
import Home from "../components/Home";
import Page404 from "../components/Page404";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin/*" element={<HeaderAdmin />} />
        <Route path="*" element={<Header />} />
      </Routes>
      <Routes>
        <Route index element={<Home />} />

        <Route path="admin" element={<LoginAdmin />} />
        <Route path="admin/users" element={<UsersList />} />
        <Route path="admin/categories" element={<CategoriesList />} />
        <Route path="admin/categories/add" element={<AddCategory />} />
        <Route path="admin/categories/edit:id" element={<EditCategory />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Routes>
        <Route path="admin/:dir/*" element={<AuthAdminComp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
