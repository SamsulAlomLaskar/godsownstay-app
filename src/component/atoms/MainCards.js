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
import { CardHeader, CardMedia } from "@mui/material";

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

export default function MainCards() {
  return menus.map((val) => {
    return (
      <Card
        className="my-2"
        color="success"
        inverse
        style={{
          width: "28rem",
          height: "24rem",
          borderRadius: "10px",
          marginLeft: "3rem",
        }}
      >
        <img
          //   className="image"
          width="100%"
          height="100%"
          alt="ggg"
          src={val.img}
        />
        <p
          style={{
            marginLeft: "9rem",
            background: "red",
            // width: "418px",
            textAlign: "left",
            font: "normal normal normal 30px/80px Roboto",
            color: "#FFFFFF",
            opacity: 1,
            marginTop: "-350px",
            zIndex: "100",
          }}
        >
          {val.category}
        </p>
      </Card>
    );
  });
}
