import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../styles/MainComponent.css";
import hayatt from "../molecule/assets/hayatt.png";
import houseboat from "../molecule/assets/houseboat.png";

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
    <Box sx={{ height: "100vh", marginLeft: "4.3rem" }}>
      <p className="heading">Gos Introducing</p>
      <Box style={{ display: "flex", flexWrap: "wrap", gap: "100px" }}>
        <Box sx={{ borderRadius: "10px" }}>
          <CardContent
            sx={{
              width: "300px",
              height: "inherit",
              borderRadius: "inherit",
            }}
          >
            <img className="image" src={hayatt} alt="Hayatt" />
          </CardContent>
          <CardActions></CardActions>
        </Box>
        <Box sx={{ borderRadius: "10px" }}>
          <CardContent
            sx={{
              width: "300px",
              height: "inherit",
              borderRadius: "inherit",
            }}
          >
            <img className="image" src={hayatt} alt="Hayatt" />
          </CardContent>
          <CardActions></CardActions>
        </Box>
      </Box>
    </Box>
  );
}
