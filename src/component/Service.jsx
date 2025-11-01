import { Box, Typography, IconButton } from "@mui/material";
import WebhookIcon from "@mui/icons-material/Webhook";
import BrushIcon from '@mui/icons-material/Brush';
import GamesIcon from '@mui/icons-material/Games';
import React from "react";

export default function Service() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 3, md: 5 },

      }}
    >
      <Typography color="primary" variant="h6">
        Services
      </Typography>
      <Typography color="secondary" variant="h6">
        Iam ready to help you
      </Typography>
      <Typography color="secondary" variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta
        dolor placeat suscipit natus dicta.
      </Typography>
      {/* service gallarey */}
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        py: 1,
        px: 2
      }}>
        <Box sx={{
          flex: {
            xs: "100%",
            sm: "45%",
            md: "30%",
          }
        }}>
          <IconButton sx={{ color: "primary.main" }}>
            <WebhookIcon />
          </IconButton>
          <Typography variant="body2" color="secondary">
            web development
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
        </Box>
        <Box sx={{
          flex: {
            xs: "100%",
            sm: "45%",
            md: "30%"
          }
        }}>
          <IconButton sx={{ color: "primary.main" }}>
            <BrushIcon />
          </IconButton>
          <Typography variant="body2" color="secondary">
            Ui/Ux Design
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
        </Box>
        <Box sx={{
          flex: {
            xs: "100%",
            sm: "45%",
            md: "30%"
          }
        }}>
          <IconButton sx={{ color: "primary.main" }}>
            <WebhookIcon />
          </IconButton>
          <Typography variant="body2" color="secondary">
            Apps development
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
        </Box>
        <Box sx={{
          flex: {
            xs: "100%",
            sm: "45%",
            md: "30%"
          }
        }}>
          <IconButton sx={{ color: "primary.main" }}>
            <WebhookIcon />
          </IconButton>
          <Typography variant="body2" color="secondary">
            Apps development
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
        </Box>
        <Box sx={{
          flex: {
            xs: "100%",
            sm: "45%",
            md: "30%"
          }
        }}>
          <IconButton sx={{ color: "primary.main" }}>
            <WebhookIcon />
          </IconButton>
          <Typography variant="body2" color="secondary">
            Apps development
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
        </Box>
        <Box sx={{
          flex: {
            xs: "100%",
            sm: "45%",
            md: "30%"
          }
        }}>
          <IconButton sx={{ color: "primary.main" }}>
            <WebhookIcon />
          </IconButton>
          <Typography variant="body2" color="secondary">
            Apps development
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
