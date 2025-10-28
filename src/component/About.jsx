import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import backGroundImage from "../assets/pexels-stefanstefancik-91227.jpg";
import React from "react";
export default function About() {
  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={12} md={6}>
    //     <Typography variant="h6">About Me</Typography>{" "}
    //     <Typography variant="h6">
    //       A Passionate Developer Who <br /> love to code{" "}
    //     </Typography>
    //     <Typography variant="body1">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim
    //       earum sed odit delectus distinctio dolor ipsam harum repellat rerum
    //       cumque, modi unde ipsum corrupti at quas aperiam. Doloremque fuga ab
    //       cum veritatis quo maiores consequatur reiciendis esse! Explicabo, amet
    //       maiores ipsa ea illo est dolorem esse sit nostrum nemo.{" "}
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <Typography variant="h6">About Me</Typography>
    //     <Typography variant="h6">
    //       A Passionate Developer Who <br /> love to code
    //     </Typography>
    //     <Typography variant="body1">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim
    //       earum sed odit delectus distinctio dolor ipsam harum repellat rerum
    //       cumque, modi unde ipsum corrupti at quas aperiam. Doloremque fuga ab
    //       cum veritatis quo maiores consequatur reiciendis esse! Explicabo, amet
    //       maiores ipsa ea illo est dolorem esse sit nostrum nemo
    //     </Typography>
    //   </Grid>
    // </Grid>

    // container
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: 10,
        gap: 2,
      }}
    >
      {/* left side */}
      <Box sx={{ flex: 1 }}>
        <Typography color="primary" variant="h6">
          About Me
        </Typography>
        <Typography color="secondary" variant="h6">
          A Passionate Developer Who <br /> love to code{" "}
        </Typography>
        <Typography color="secondary" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nemo non adipisci debitis quam, expedita amet consectetur eius ut,
          consequuntur neque, possimus ducimus optio repudiandae aperiam aliquam
          quidem earum sequi!
        </Typography>

        {/* info details */}
        <Grid container spacing={1} sx={{ mt: "20px" }}>
          {/* first row */}
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="primary">
              Age:
            </Typography>
          </Grid>
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="secondary">
              22
            </Typography>
          </Grid>
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="primary">
              Residence:
            </Typography>
          </Grid>
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="secondary">
              Germany
            </Typography>
          </Grid>
          {/* second row */}
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="primary">
              Freelance:
            </Typography>
          </Grid>
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="secondary">
              Available
            </Typography>
          </Grid>
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="primary">
              Address:
            </Typography>
          </Grid>
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="secondary">
              Berlin
            </Typography>
          </Grid>
          {/* third row */}
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="primary">
              Phone:
            </Typography>
          </Grid>
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="secondary">
              0112012
            </Typography>
          </Grid>
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="primary">
              Email:
            </Typography>
          </Grid>
          <Grid item size={3}>
            <Typography variant="body1" component="span" color="secondary">
              @gmail.com
            </Typography>
          </Grid>
        </Grid>

        {/* Button box */}
        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <Button color="secondary" variant="contained">
            Hired me know
          </Button>
          <Button variant="contained">read more</Button>
        </Box>
      </Box>
      {/* right side */}
      <Box sx={{ flex: 1, position: "relative" }}>
        <img
          src={backGroundImage}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <Box
          sx={{
            borderRadius: "20px",
            position: "absolute",
            top: "75%",
            left: "-50px",
            zIndex: 100,
            bgcolor: "primary.main",
            p:{xs:1.25 , md:2.5}
          }}
        >
          <Typography variant="body1">10+ year of experince</Typography>
        </Box>
      </Box>
    </Box>
  );
}
