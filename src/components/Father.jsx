import React from "react";
import { Outlet } from "react-router-dom";

export default function Father() {
  return (
    <div>
      Father
      <br />
      <br />
      <br />
      <Outlet />
    </div>
  );
}
