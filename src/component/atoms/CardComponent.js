import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "../../styles/CardButtons.css";

export default function CardComponent() {
  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [childAge, setChildAge] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]);
  const btnCss = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "5px",
    marginTop: ".2rem",
    marginLeft: ".5rem",
  };
  return (
    <Box sx={{}}>
      <Card
        sx={{
          width: "100%",
          border: "2px solid #fff",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <Grid container>
          <Grid
            xs={6}
            sx={{
              height: "12rem",
              alignItems: "center",
            }}
          >
            <p
              className="parag"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginTop: ".5rem",
                marginLeft: "1rem",
              }}
            >
              Rooms
            </p>
            <Box
              style={{
                marginTop: ".2rem",
              }}
              className="cardButton"
            >
              <button id="leftBtn" color="secondary" className="btnClr">
                <RemoveIcon />
              </button>
              <p className="count">0{rooms}</p>
              <button id="rightBtn" className="btnClr">
                <AddIcon />
              </button>
            </Box>
            <p
              className="parag"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginTop: ".2rem",
                marginLeft: "1rem",
              }}
            >
              Adults
            </p>
            <Box
              style={{
                marginTop: ".2rem",
              }}
              className="cardButton"
            >
              <button id="leftBtn" className="btnClr">
                <RemoveIcon />
              </button>
              <p className="count">0{adults}</p>
              <button id="rightBtn" className="btnClr">
                <AddIcon />
              </button>
            </Box>
            <p
              className="parag"
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginTop: ".5rem",
                marginLeft: "1rem",
              }}
            >
              Children (1 - 12yrs)
            </p>
            <Box
              style={{
                marginTop: ".2rem",
              }}
              className="cardButton"
            >
              <button id="leftBtn" className="btnClr">
                <RemoveIcon />
              </button>
              <p className="count">0{children}</p>
              <button id="rightBtn" className="btnClr">
                <AddIcon />
              </button>
            </Box>
            <hr
              style={{
                transform: "rotate(90deg)",
                position: "relative",
                bottom: "90px",
                scale: "110%",
                left: "4.3rem",
                // color: "red",
                opacity: 0.2,
              }}
            />
          </Grid>
          <Grid xs={6} sx={{ height: "12rem" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginTop: ".4rem",
                marginLeft: ".5rem",
              }}
            >
              Select Child Age
            </p>
            <p
              style={{
                fontSize: "9px",
                fontWeight: "500",
                marginTop: ".3rem",
                marginLeft: ".5rem",
                color: "grey",
              }}
            >
              Set exact child age to find the best room options, price etc
            </p>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginTop: ".6rem",
                marginLeft: ".5rem",
              }}
            >
              Child Age
            </p>
            <Box style={btnCss}>
              {childAge.map((val) => (
                <button
                  className="ageButton"
                  style={{
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px",
                    border: "1px solid #4A6686",
                    color: "#4A6686",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "white",
                  }}
                >
                  {val}
                </button>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            sx={{
              marginTop: "2px",
              width: "95%",
              height: "1.5rem",
              textTransform: "none",
              color: "white",
              background: "#1876DF",
            }}
            variant="contained"
          >
            Apply
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
