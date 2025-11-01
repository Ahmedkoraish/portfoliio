import { Box, Divider, LinearProgress, Typography } from "@mui/material";
import React from "react";

export default function Skills() {
  return (
    // container
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 3, md: 5 },
      }}
    >
      <Typography color="primary" variant="h6">
        My Skills and Education
      </Typography>
      <Typography color="secondary" variant="h5">
        My Best Expertis and Skill
      </Typography>

      {/* expert box */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: "10px",
          gap: 2,
        }}
      >
        {/* Group1 */}
        <Box
          sx={{
            flex: { xs: "100%", md: "30%" },
            p: "15px",
            mt: "5px",
            bgcolor: "#191919",
            borderRadius:2
          }}
        >
          <Typography variant="body2" color="primary">
            December 2018 - January 2019
          </Typography>
          <Typography variant="body1" color="secondary">
            Front End adisicing Developer
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Divider
            sx={{
              borderColor: "#aa9f9fff",
              borderWidth: 1,
              width: "50%",
              mt: "10px",
              mb: "10px",
            }}
          />
          <Typography variant="body2" color="primary">
            December 2018 - January 2019
          </Typography>
          <Typography variant="body1" color="secondary">
            Front End adisicing Developer
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Divider
            sx={{
              borderColor: "#aa9f9fff",
              borderWidth: 1,
              width: "50%",
              mt: "10px",
              mb: "10px",
            }}
          />{" "}
          <Typography variant="body2" color="primary">
            December 2018 - January 2019
          </Typography>
          <Typography variant="body1" color="secondary">
            Front End adisicing Developer
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Divider
            sx={{ borderColor: "#aa9f9fff", borderWidth: 1, width: "50%" }}
          />
        </Box>

        {/* Group2 */}
        <Box
          sx={{
            flex: { xs: "100%", md: "30%" },
            p: "15px",
            mt: "5px",
            bgcolor: "#191919",
            borderRadius:2
          }}
        >
          <Typography variant="body1" color="secondary">
            My Skill
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>

          <Typography variant="body1" color="secondary" sx={{ m: "5px" }}>
            HTML
          </Typography>
          <LinearProgress
            variant="determinate"
            value={85}
            sx={{
              width: "80%",
            }}
          />
          <Typography variant="body1" color="secondary" sx={{ m: "5px" }}>
            photoshop
          </Typography>
          <LinearProgress
            variant="determinate"
            value={90}
            sx={{
              width: "80%",
            }}
          />
          <Typography variant="body1" color="secondary" sx={{ m: "5px" }}>
            wordpress
          </Typography>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              width: "80%",
            }}
          />
          <Typography variant="body1" color="secondary" sx={{ m: "5px" }}>
            Adobe xd
          </Typography>
          <LinearProgress
            variant="determinate"
            value={95}
            sx={{
              width: "80%",
            }}
          />
          <Typography variant="body1" color="secondary" sx={{ m: "5px" }}>
            Figma
          </Typography>
          <LinearProgress
            variant="determinate"
            value={88}
            sx={{
              width: "80%",
            }}
          />
        </Box>

        {/* Group3 */}
        <Box
          sx={{
            flex: { xs: "100%", md: "30%" },
            p: "15px",
            mt: "5px",
            bgcolor: "#191919",
            borderRadius:2
          }}
        >
          <Typography variant="body2" color="primary">
            December 2018 - January 2019
          </Typography>
          <Typography variant="body1" color="secondary">
            Front End adisicing Developer
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Divider
            sx={{
              borderColor: "#aa9f9fff",
              borderWidth: 1,
              width: "50%",
              mt: "10px",
              mb: "10px",
            }}
          />
          <Typography variant="body2" color="primary">
            December 2018 - January 2019
          </Typography>
          <Typography variant="body1" color="secondary">
            Front End adisicing Developer
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Divider
            sx={{
              borderColor: "#aa9f9fff",
              borderWidth: 1,
              width: "50%",
              mt: "10px",
              mb: "10px",
            }}
          />{" "}
          <Typography variant="body2" color="primary">
            December 2018 - January 2019
          </Typography>
          <Typography variant="body1" color="secondary">
            Front End adisicing Developer
          </Typography>
          <Typography variant="body2" color="secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Divider
            sx={{ borderColor: "#aa9f9fff", borderWidth: 1, width: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
