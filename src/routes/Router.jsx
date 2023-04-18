import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthAdminComp from "../admin/AuthAdminComp";
import HeaderAdmin from "../admin/HeaderAdmin";
import LoginAdmin from "../admin/LoginAdmin";
import UsersList from "../admin/UsersList";
import AddCategory from "../admin/categories/AddCategory";
import CategoriesList from "../admin/categories/CategoriesList";
import EditCategory from "../admin/categories/EditCategory";
import AddVideo from "../admin/videos/AddVideo";
import VideosList from "../admin/videos/VideosList";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import Home from "../components/Home";
import Page404 from "../components/Page404";
import VideoInfo from "../components/VideoInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin/*" element={<HeaderAdmin />} />
        <Route path="*" element={<Header />} />
      </Routes>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/category/:name" element={<CategoryList />} />
        <Route path="/video/:id" element={<VideoInfo />} />

        <Route path="admin" element={<LoginAdmin />} />
        <Route path="admin/users" element={<UsersList />} />
        <Route path="admin/categories" element={<CategoriesList />} />
        <Route path="admin/categories/add" element={<AddCategory />} />
        <Route path="admin/categories/edit:id" element={<EditCategory />} />
        <Route path="admin/videos" element={<VideosList />} />
        <Route path="admin/videos/add" element={<AddVideo />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Routes>
        <Route path="admin/:dir/*" element={<AuthAdminComp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
