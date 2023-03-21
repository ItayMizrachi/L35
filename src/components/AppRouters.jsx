import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components_general/Header";
import AtlasPage from "../comps_atlas/AtlasPage";
import FavPage from "../comps_fav/FavPage";
import FavsTable from "../comps_fav/FavsTable";
import Counter from "../hw_comps/Counter";
import Home from "./Home";
import NumbersHookPage from "./NumbersHookPage";
import Page404 from "./Page404";

export default function AppRouters() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="favpage" element={<FavPage />} />
        <Route path="atlas" element={<AtlasPage />} />
        <Route path="table" element={<FavsTable />} />
        <Route path="number-hook" element={<NumbersHookPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
