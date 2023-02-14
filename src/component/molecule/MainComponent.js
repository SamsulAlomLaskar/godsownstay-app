import React from "react";
import Box from "@mui/material/Box";
import "../../styles/MainComponent.css";
import hayatt from "../molecule/assets/hayatt.png";
import houseboat from "../molecule/assets/houseboat.png";
import MainCards from "../atoms/MainCards";

const menus = [
  {
    category: "Hotel Reservation",
    name: "VOYE HOME Orchids Villa",
    btnName: "Read more",
    img: hayatt,
  },
  {
    category: "Houseboat",
    name: "GODS OWN STAY DJ 7-8-9 & 10 Bedroom Full Day Cruise",
    btnName: "Read more",
    img: houseboat,
  },
  {
    category: "Packages",
    name: "GODS OWN STAY Puniyalan 2457",
    btnName: "Read more",
    img: hayatt,
  },
  {
    category: "Shikkara",
    name: "GODS OWN STAY Puniyalan 2457",
    btnName: "Read more",
    img: houseboat,
  },
];

export default function MainComponent() {
  return (
    <Box sx={{ marginLeft: "4.3rem" }}>
      <p className="heading">Gos Introducing</p>
      <Box style={{ display: "flex", flexWrap: "wrap", gap: "50px 20px" }}>
        <MainCards />
      </Box>
      <br />
    </Box>
  );
}
