import React from "react";
import OfferCardComponent from "../atoms/OfferCardComponent";
import MainComponent from "../molecule/MainComponent";
import Navbar from "../molecule/Navbar";
import { BodyComponent } from "./BodyComponent";
import HeaderComponent from "./HeaderComponent";

export const LayoutComponent = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderComponent />
      <Navbar />
      <BodyComponent />
      <OfferCardComponent />
      <MainComponent />
    </div>
  );
};
