import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../organism/mainlogoGodsownstay1.png";

const navItems = [
  "📞 24x7 gosCare Support",
  "List your property",
  "Invite & Earn",
];

function HeaderComponent() {
  const [pages, setPages] = useState(navItems);

  const displayNavItems = () => {
    return pages.map((page) => (
      <Button
        key={page}
        sx={{
          my: 2,
          color: "#000000",
          fontFamily: "roboto",
          fontWeight: 500,
          fontSize: "15px",
          textTransform: "none",
          marginRight: "50px",
          display: "flex",
          flexDirection: "flex-end",
          float: "right",
        }}
      >
        {page}
      </Button>
    ));
  };

  return (
    <AppBar sx={{ backgroundColor: "white" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "#0C0C0C",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "300px", height: "50px" }} src={logo} />
            </Typography>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#0C0C0C",
              textDecoration: "none",
            }}
          >
            <img style={{ width: "300px", height: "50px" }} src={logo} />
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              id="1111"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              {displayNavItems()}
            </Box>
            <Box
              id="222"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  float: "right",
                  position: "relative",
                  left: "25vw",
                },
              }}
            >
              {displayNavItems()}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderComponent;
