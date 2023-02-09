import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateComponent from "../atoms/DateComponent";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import { red } from "@mui/material/colors";
import "../../styles/BodyComponent.css";
import CardComponent from "../atoms/CardComponent";
import AnitmationComponent from "../molecule/AnitmationComponent";

export const BodyComponent = () => {
  const [value, setValue] = useState("");
  const [showCard, setShowCard] = useState("none");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const displayCard = () => {
    console.log("Card called");
    showCard === "none" ? setShowCard("block") : setShowCard("none");
  };

  return (
    <div>
      <div class="waveDiv" id="firstDiv"></div>
      <svg viewBox="0 70 500 60" preserveAspectRatio="none">
        <rect x="0" y="0" width="500" height="500" style={{ stroke: "none" }} />
        <path
          d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
          style={{ stroke: "none" }}
        ></path>
      </svg>
      <Box
        sx={{
          width: "40rem",
          height: "7.5rem",
          border: "1px solid white",
          borderRadius: "10px",
          backgroundColor: "white",
          margin: "auto",
          position: "absolute",
          bottom: "28%",
          left: "22%",
          right: "30%",
          transform: "translate(-50, 50)",
          boxShadow: "2px 2px 5px #999",
        }}
      >
        <Box
          sx={{
            marginTop: ".5rem",
            marginLeft: "1rem",
            // position: "absoulte",
          }}
        >
          <p
            className="para"
            style={{
              color: "black",
              padding: "1px",
              fontSize: "15px",
              fontStyle: "normal normal medium 20px/26px Roboto",
              height: "20px",
              textAlign: "left",
            }}
          >
            Where would you like to go?
          </p>
          <LocationOnIcon sx={{ color: "#1675DF" }} />
          <TextField
            id="standard-basic"
            sx={{
              marginLeft: "-20px",
              width: "50ch",
              height: "1ch",
              "& [placeholder]": {
                fontSize: "14px",
                paddingLeft: "22px",
              },
            }}
            placeholder="Destination, City, Hotel, Name"
            variant="standard"
          />
          {/* <GroupedButtons /> */}
          <Box style={{ marginTop: "5px", display: "flex" }}>
            <p
              style={{
                color: "black",
                fontSize: "10px",
                fontStyle: "normal normal medium 20px/26px Roboto",
                paddingRight: "7.6rem",
                fontWeight: 600,
              }}
            >
              Check-In
            </p>
            <p
              style={{
                color: "black",
                fontSize: "10px",
                fontStyle: "normal normal medium 20px/26px Roboto",
                paddingRight: "7.1rem",
                fontWeight: 600,
              }}
            >
              Check-Out
            </p>
            <p
              style={{
                color: "black",
                fontSize: "10px",
                fontStyle: "normal normal medium 20px/26px Roboto",
                fontWeight: 600,
              }}
            >
              Guest
            </p>
          </Box>
          <Box
            style={{
              top: "-.5rem",
              position: "relative",
              right: "6.5%",
              //   left: "10px",
              display: "flex",
            }}
          >
            <DateComponent />
            <DateComponent />
            <Box
              sx={{
                position: "absolute",
                right: "22.4%",
                // top: "3%",
                scale: "65%",
                zIndex: 100,
              }}
            >
              <PersonAddAltSharpIcon
                sx={{ color: "primary", marginTop: ".8rem" }}
              />
              <Button
                sx={{
                  textTransform: "none",
                  color: "grey",
                  marginBottom: "1.1rem",
                }}
                onClick={displayCard}
              >
                Guest details
                {/* <ion-icon
                    style={{ color: "red" }}
                    name="chevron-up-outline"
                  ></ion-icon> */}
                {showCard === "none" ? (
                  <KeyboardArrowDownSharpIcon color="red" />
                ) : (
                  <KeyboardArrowUpSharpIcon sx={{ contained: "secondary" }} />
                )}
              </Button>
            </Box>
          </Box>
        </Box>
        <Button
          sx={{
            display: "flex",
            position: "relative",
            bottom: "6rem",
            width: "7.5rem",
            height: "3rem",
            left: "30rem",
            textTransform: "none",
          }}
          variant="contained"
        >
          Search
        </Button>
        <Box
          sx={{
            display: showCard,
            width: "50%",
            position: "relative",
            bottom: "4.4rem",
            left: "18rem",
            boxShadow: "2px 4px 15px #ccc",
            borderRadius: "10px",
          }}
        >
          <CardComponent />
        </Box>
      </Box>
      <AnitmationComponent />
      <br />
    </div>
  );
};

{
  /* <div class="container">
  Heyy
  <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
    <path
      d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
      style={{ stroke: "none", fill: "#0194FE" }}
    ></path>
  </svg>
</div> */
}
{
  /* <div class="wave top green">rem ips</div> */
}
{
  /* <div id="polygon">olor sit ame</div> */
}
