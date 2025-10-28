import React from "react";
import { Box, Typography } from "@mui/material";
import backGroundImage from "../assets/pexels-stefanstefancik-91227.jpg";
import Nav from "../component/Nav";
import { Translate } from "@mui/icons-material";

export default function Header() {
  return (
    // container
    <Box sx={{ position: "relative" }}>
      {/* navbar */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Nav />
      </Box>
      {/* background img */}
      <Box
        sx={{
          backgroundImage: `url(${backGroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* name container */}
        <Box
          sx={{
            backgroundColor: "#ffaf00",
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: "15px",
            borderRadius: "25px",
            borderStyle: "none",
            gap: 1,
          }}
        >
          <Typography variant="body1" color="inherit">
            HELLO I AM Willimes Parker
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
