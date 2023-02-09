import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Icon, IconButton } from "@mui/material";
import "../../styles/Navbar.css";
// import { Image } from "@mui/icons-material";
import img1 from "../molecule/assets/mask-group-41/img1.png";
import img2 from "../molecule/assets/mask-group-42/img2.png";
import img3 from "../molecule/assets/mask-group-43/img3.png";
import img4 from "../molecule/assets/fishing.png";
import locationImg from "../molecule/assets/web-1920/locImg1.png";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  backgroundColor: "#0194FE",
  height: "3rem",
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(1),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

const menuItems = [
  {
    name: "Hotel",
    img: img1,
  },
  {
    name: "Package",
    img: img2,
  },
  {
    name: "Houseboat",
    img: img3,
  },
  {
    name: "Shikara",
    img: img4,
  },
];
const userLocations = [
  {
    name: "Near by",
    img: locationImg,
  },
  {
    name: "Kochi",
    img: locationImg,
  },
  {
    name: "Munnar",
    img: locationImg,
  },
  {
    name: "Allepie",
    img: locationImg,
  },
  {
    name: "Kochi",
    img: locationImg,
  },
  {
    name: "Munnar",
    img: locationImg,
  },
  {
    name: "Allepie",
    img: locationImg,
  },
  {
    name: "Kochi",
    img: locationImg,
  },
  {
    name: "Munnar",
    img: locationImg,
  },
  {
    name: "Allepie",
    img: locationImg,
  },
  {
    name: "Allepie",
    img: locationImg,
  },
];

export default function Navbar() {
  const [mainMenu, setMainMenu] = useState(menuItems);
  const [locations, setLocations] = useState(userLocations);
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static"> */}
      <StyledToolbar>
        <Box
          margin={"auto"}
          id="BOOXX"
          sx={{
            display: "flex",
            height: "10vh",
            marginTop: "8vh",
            marginRight: "19%",
          }}
        >
          {mainMenu.map((val, ind) => {
            return (
              <Box
                sx={{
                  backgroundColor: "white",
                  //   width: "60px",
                  height: "65px",
                  borderRadius: ".2rem",
                  justifyContent: "space-between",
                  marginRight: "3.5rem",
                }}
                id="ind"
              >
                <Button sx={{ width: "30px" }}>
                  {/* <img src="src\assets\Mask_Group_41\Mask Group 41.png"></img> */}
                  <img
                    alt="y"
                    src={val.img}
                    style={{ width: "30px", heigth: "32px", color: "#1675DF" }}
                  />
                  <p
                    style={{
                      textDecoration: "none",
                      fontSize: "10px",
                      color: "#68A5EA",
                      textTransform: "none",
                      textAlign: "center",
                      position: "absolute",
                      marginTop: "4rem",
                    }}
                  >
                    {val.name}
                  </p>
                </Button>
              </Box>
            );
          })}
        </Box>
        {/* <Box
          sx={{
            // display: "flex",
            position: "relative",
            right: "10%",
            // left: "85vw",
            //   height: "10vh",
          }}
        > */}
        <Button
          variant="outlined"
          sx={{
            position: "relative",
            top: ".2rem",
            right: "10%",
            textTransform: "none",
            color: "white",
            fontWeight: 500,
            height: "2.5rem",
            fontFamily: "roboto",
            borderColor: "white",
          }}
        >
          Login / Sign up
        </Button>
      </StyledToolbar>
      <StyledToolbar>
        <Box
          margin={"auto"}
          id="BOOXX"
          className="container"
          sx={{
            marginLeft: "30px",
            display: "flex",
            height: "18vh",
            marginTop: "8vh",
          }}
        >
          {locations.map((val, ind) => {
            return (
              <Box
                className="card"
                sx={{
                  backgroundColor: "white",
                  width: "70px",
                  height: "70px",
                  borderRadius: "2.2rem",
                  justifyContent: "space-between",
                  marginRight: "3.6rem",
                }}
                id="ind"
              >
                <p
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                    color: "white",
                    textTransform: "none",
                    textAlign: "justify",
                    marginLeft: "16px",
                    position: "absolute",
                    marginTop: "4.5rem",
                  }}
                >
                  {val.name}
                </p>
              </Box>
            );
          })}
        </Box>
      </StyledToolbar>
    </Box>
  );
}
