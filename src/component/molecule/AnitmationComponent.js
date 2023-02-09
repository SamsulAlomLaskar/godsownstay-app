import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../../styles/AnitmationComponent.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   backgroundColor: "#1A2027",
  ...theme.typography.body2,
  //   padding: theme.spacing(15),
  //   textAlign: "start",
  color: theme.palette.text.secondary,
}));

export default function AnitmationComponent() {
  return (
    <Box sx={{ flexGrow: 1, border: "none", height: "20rem" }}>
      <Grid container>
        <Grid xs={6}>
          <Box
            sx={{
              marginLeft: "40%",
            }}
          >
            <p className="gos">GOS</p>
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box sx={{ marginLeft: "35%" }}>
            <p className="endsIn">Ends in</p>
            <Grid container sx={{ marginLeft: "-18%" }}>
              <Grid xs={2} sm={4} md={4}>
                <p className="time">05</p>
                <p className="timeLabel">Hours</p>
              </Grid>
              <Grid xs={2} sm={4} md={4}>
                <p className="time">10</p>
                <p className="timeLabel">Minutes</p>
              </Grid>
              <Grid xs={2} sm={4} md={4}>
                <p className="time">42</p>
                <p className="timeLabel">Seconds</p>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
