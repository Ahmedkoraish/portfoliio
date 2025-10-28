import { Box, Typography, Button } from "@mui/material";
import newOne from "../assets/new1.jpg";
import newTwo from "../assets/new2.jpg";
import newThree from "../assets/new3.jpg";
import React from "react";

export default function News() {
  const news = [
    {
      img: newOne,
      name: "mehakalii",
      date: "27 Aug 2025",
      des: "Lorem ipsum dolor sit amet.",
    },
    {
      img: newTwo,
      name: "mehakalii",
      date: "27 Aug 2025",
      des: "Lorem ipsum dolor sit amet.",
    },
    {
      img: newThree,
      name: "mehakalii",
      date: "27 Aug 2025",
      des: "Lorem ipsum dolor sit amet.",
    },
    {
      img: newThree,
      name: "mehakalii",
      date: "27 Aug 2025",
      des: "Lorem ipsum dolor sit amet.",
    },
    {
      img: newOne,
      name: "mehakalii",
      date: "27 Aug 2025",
      des: "Lorem ipsum dolor sit amet.",
    },
    {
      img: newTwo,
      name: "mehakalii",
      date: "27 Aug 2025",
      des: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 3, md: 5 },
      }}
    >
      <Typography color="primary" variant="h6">
        Blog & News
      </Typography>
      <Typography color="secondary" variant="h6">
        Get Every Single Update
      </Typography>
      <Typography color="secondary" variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et
        quaerat expedita cumque nemo omnis?
      </Typography>
      {/* newsGallarey */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 3,
        }}
      >
        {news.map((news, ele) => (
          <Box key={ele} sx={{ flex: { xs: "100%", sm: "45%", md: "30%" } }}>
            <img src={news.img} style={{ width: "100%", objectFit: "cover" }} />
            <Typography variant="body1"  color="secondary">{news.name}</Typography>
            <Typography variant ="body1" color="secondary">{news.des}</Typography>
            <Button variant="contained" color="primary">
              Read More
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
