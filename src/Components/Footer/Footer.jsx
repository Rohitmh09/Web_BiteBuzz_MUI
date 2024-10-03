import { Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div >
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{cursor: "pointer", display: "flex", gap: "1rem", marginY: "5px"
          ,"& svg:hover":{color:"goldenrod", transform: "scale(1.2)", transition: "all 200ms ease-in-out"}
          
        }}>
          <InstagramIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </Box>

        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" } }}
        >
          Copy the code, get things done!
        </Typography>
      </Box>
    </div>
  );
}
