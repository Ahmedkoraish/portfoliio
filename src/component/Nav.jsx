import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";

export default function Nav() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Goolo
          </Typography>
          <IconButton size="large" edge="start" sx={{ color: "#ffae00" }}>
            <AppsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
