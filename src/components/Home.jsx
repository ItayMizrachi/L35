import React from "react";
import LatestVideosListHome from "../comps_client/home/LatestVideosListHome";
import StripHome from "../comps_client/home/StripHome";
import VideosCategoriesListHome from "../comps_client/home/VideosCategoriesListHome";
import "./css/home.css";

export default function Home() {
  return (
    <>
      <StripHome />
      <VideosCategoriesListHome />
      <LatestVideosListHome />
    </>
  );
}
