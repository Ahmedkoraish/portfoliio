import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function Nav() {

  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <AppBar sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Goolo
          </Typography>
          <IconButton size="large" edge="start" sx={{ color: "#ffae00" }} onClick={() => setDrawerOpen(true)}>
            <AppsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen}>
        <Box
          sx={{ width: { xs: 200, sm: 250, xl: 240 }, p: 2, position: "relative", display: "flex", flexDirection: "column",alignItems: "center", bgcolor: "background.default" , height: '100%'}}
          role="presentation"

        >
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "primary.main", position: "absolute", top: 7, right: 7 }}>
            <CloseIcon />
          </IconButton>
          <List sx={{ mt: 5 ,color:"secondary.main",}}>
            {["Home", "About", "Services", "Contact"].map((text) => (
              <ListItem sx={{"&:hover":{color:"primary.main"}}} button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
