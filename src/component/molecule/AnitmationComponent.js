import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../styles/AnitmationComponent.css";
import crackerJson from "../molecule/assets/12389.json";
import flashDeal from "../molecule/assets/66905-flash-deals.json";

export default function AnitmationComponent() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  let deadline = new Date("feb 16, 2023 00:00:00").getTime();
  let days, hours, minutes, seconds;
  let mF = Math.floor;

  useEffect(() => {}, [hour, minute, second]);
  let x = setInterval(function () {
    let now = new Date().getTime();
    let t = deadline - now;
    days = mF(t / (1000 * 60 * 60 * 24));
    hours = mF((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = mF((t % (1000 * 60 * 60)) / (1000 * 60));
    seconds = mF((t % (1000 * 60)) / 1000);
    setHour(hours);
    setMinute(minutes);
    setSecond(seconds);
    if (t < 0) clearInterval(x);
  }, 1000);

  return (
    <Box sx={{ flexGrow: 1, border: "none", overflow: "hidden" }}>
      <Grid container>
        <Grid xs={6}>
          <Box
            sx={{
              marginLeft: "40%",
            }}
          >
            <p className="gos">GOS</p>
            <lottie-player
              src={JSON.stringify(flashDeal)}
              background="transparent"
              speed="1"
              style={{
                width: "310px",
                height: "190px",
                marginLeft: "-6rem",
                marginTop: "-3rem",
              }}
              loop
              autoplay
            ></lottie-player>
          </Box>
        </Grid>
        <Grid xs={6}>
          <lottie-player
            id="svgg"
            src={JSON.stringify(crackerJson)}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          <Box sx={{ marginLeft: "35%", marginTop: "-12rem" }}>
            <p className="endsIn">Ends in</p>
            <Grid container sx={{ marginLeft: "-15%", marginTop: ".6rem" }}>
              <Grid xs={2} sm={4} md={4} sx={{ marginRigth: "-18%" }}>
                <p className="time">
                  {hour < 0 ? "00" : hour < 10 && hour >= 0 ? `0${hour}` : hour}
                </p>
                <p className="timeLabel">Hours</p>
              </Grid>
              <Grid xs={2} sm={4} md={4} sx={{ marginRigth: "-18%" }}>
                <p className="time">
                  {minute < 0
                    ? "00"
                    : minute < 10 && minute >= 0
                    ? `0${minute}`
                    : minute}
                </p>
                <p className="timeLabel">Minutes</p>
              </Grid>
              <Grid xs={2} sm={4} md={4} sx={{}}>
                <p className="time">
                  {second < 0
                    ? "00"
                    : second < 10 && second >= 0
                    ? `0${second}`
                    : second}
                </p>
                <p className="timeLabel">Seconds</p>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <br />
    </Box>
  );
}
