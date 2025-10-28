import { Box, Typography } from "@mui/material";
import foodTwo from "../assets/food2.jpg";
import foodThree from "../assets/food3.jpg";
import React from "react";

export default function Portfolio() {
  const imgs = [foodThree, foodTwo, foodThree, foodThree, foodTwo, foodThree];
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 3, md: 5 },
      }}
    >
      <Typography color="primary" variant="h6">
        My Protofolio
      </Typography>
      <Typography color="secondary" variant="h6">
        A Lead Ui & Ux Designer
      </Typography>
      <Typography color="secondary" variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et
        quaerat expedita cumque nemo omnis?
      </Typography>
      {/* foodGallarey */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt:3
        }}
      >
        {imgs.map((img, ele) => (
          <Box
            key={ele}
            sx={{
              flex: { xs: "100%", sm: "45%", md: "30%" },
            }}
          >
            <img
            src={img}
            style={{width:"100%",objectFit:"cover"}}/>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
