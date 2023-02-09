import React from "react";
import Navbar from "../molecule/Navbar";
import { BodyComponent } from "./BodyComponent";
import HeaderComponent from "./HeaderComponent";

export const LayoutComponent = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderComponent />
      <Navbar />
      <BodyComponent />
    </div>
  );
};
