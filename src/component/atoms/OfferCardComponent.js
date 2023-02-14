import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import next from "../atoms/assets/next.png";
import "../../styles/OfferCardComponent.css";
import offer from "../atoms/assets/99010-offer.json";
import offerImg from "../atoms/assets/early-bird-13jan21-lp1.png";
import copyImg from "../atoms/assets/copy.png";
import Snackbars from "./SnackBarComponent";

export default function OfferCardComponent() {
  const [open, setOpen] = useState(false);
  const offerItems = [
    {
      img: offerImg,
      discount: "Get flat 12% Off",
      offerContent: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna
      aliquyam erat, sed diam`,
      copyCode: "Copy Code: ",
      copyIcon: copyImg,
      code: "GOS1210",
    },
    {
      img: offerImg,
      discount: "Get flat 12% Off",
      offerContent: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna
      aliquyam erat, sed diam`,
      copyCode: "Copy Code: ",
      copyIcon: copyImg,
      code: "GOS2210",
    },
    {
      img: offerImg,
      discount: "Get flat 12% Off",
      offerContent: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna
      aliquyam erat, sed diam`,
      copyCode: "Copy Code: ",
      copyIcon: copyImg,
      code: "GOS1220",
    },
  ];
  // console.table(offerItems);
  const getCode = (code) => {
    // console.log(code, "Code");
    navigator.clipboard.writeText(code);
    setOpen(true);
    // console.log(copied);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid rowSpacing={1} xs={12} columnSpacing={{ xs: 1, sm: 0, md: 0 }}>
        <Grid container xs={6}>
          <lottie-player
            src={JSON.stringify(offer)}
            background="transparent"
            speed="1"
            style={{
              width: "80px",
              height: "40px",
              marginLeft: "2.8rem",
              marginTop: "-.5rem",
            }}
            loop
            autoplay
          ></lottie-player>
          {/* <img className="offerIcon" src={discount} alt="" /> */}
          <p className="gosOffer">Gos Offers for you</p>
          <p className="viewAll">View All</p>
          <img className="rightIcon" src={next} alt="" />
          {/* <ChevronRightSharpIcon className="rightIcon" /> */}
        </Grid>
        <Grid xs={6} sx={{ scale: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 360,
                height: 140,
              },
              marginLeft: "3.5rem",
              padding: ".5rem",
            }}
          >
            {offerItems.map((items, itemKey) => {
              return (
                <Paper elevation={2}>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <img
                        src={items.img}
                        className="offerImg"
                        style={{
                          width: "80px",
                          height: "90px",
                          borderRadius: "4px",
                          alignItems: "center",
                          backgroundPosition: "center",
                          margin: "5% 5% 5% 5%",
                          marginRight: "1rem",
                        }}
                        alt="img"
                      />
                    </Box>
                    <Box>
                      <p className="getOffer">{items.discount}</p>
                      <p className="textOffer">{items.offerContent}</p>
                    </Box>
                  </Box>
                  <div style={{ display: "flex" }}>
                    <p className="copy">{items.copyCode}</p>
                    <p className="copyCode">{items.code}</p>
                    <div
                      style={{
                        marginLeft: "1rem",
                        marginTop: "2px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        onClick={() => getCode(items.code)}
                        style={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "4px",
                          //   alignItems: "center",
                          //   backgroundPosition: "center",
                          //   margin: "5% 5% 5% 5%",
                          //   marginRight: "1rem",
                          //   marginTop: "2px",
                          //   cursor: "pointer",
                        }}
                        src={copyImg}
                        alt="imgg"
                      />
                    </div>
                  </div>
                </Paper>
              );
            })}
          </Box>
        </Grid>
      </Grid>
      {open && <Snackbars openSnack={open} setOpenSnack={setOpen} />}
    </Box>
  );
}
