import * as React from "react";
import Box from "@mui/material/Box";

export default function BodyNavbar() {
  return (
    <Box
    //   sx={{
    //     width: "100vw",
    //     height: 150,
    //     backgroundColor: "#0194FE",
    //   }}
    >
      <Box
        sx={{
          width: "40rem",
          height: "6.5rem",
          border: "1px solid white",
          borderRadius: "10px",
          backgroundColor: "red",
          margin: "auto",
          marginTop: "-10rem",
          zIndex: 10,
        }}
      ></Box>
    </Box>
  );
}
