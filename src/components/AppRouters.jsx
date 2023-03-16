import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components_general/Footer";
import Header from "../components_general/Header";
import CounterParent from "../comps_context/CounterParent";
import FormToys from "./FormToys";
import Home from "./Home";
import Page404 from "./Page404";
import SignUp from "./SignUp";
import TvInfoPage from "./TvInfoPage";
import TvPage from "./TvPage";

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/tv/:index" element={<TvInfoPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/toys" element={<FormToys />} />
        <Route path="/counter" element={<CounterParent />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
