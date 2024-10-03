import { Box, Button, Typography } from "@mui/material";
import React from "react";
import restaurantImg from "../images/restaurantBG.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${restaurantImg})`,
          backgroundSize: "cover",
          backgroundPosition: {xs:"center right", sm:"center center" ,lg:"center"},
          height: "100vh",
          display: "flex",
          alignItems: "flex-start", // Alig n content towards the top
          justifyContent: "flex-start", // Align content to the left
          padding: "50px", // Add padding for spacing from the edge
        }}
      >
        <Box
          sx={{
            width: { xs: '90%', sm: 350 }, // Responsive width
            height: { xs: 'auto', sm: 480 }, // Responsive height
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly transparent background for contrast
            borderRadius: "12px", // Slightly more rounded corners
            padding: { xs: "20px", sm: "30px" }, // Responsive padding
          
            boxShadow: "0 6px 30px rgba(0, 0, 0, 0.6)", // Deeper shadow for more dimension
            maxWidth: "100%", // Ensure responsiveness
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontFamily:"cursive",
              marginBottom: "20px",
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)", // Bolder shadow for larger text
              fontSize: { xs: "32px", sm: "48px" }, // Responsive font size
            }}
          >
            Welcome to BiteBuzz
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "white",
              marginBottom: "20px",
              lineHeight: "1.5",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)", // Text shadow for visibility
              fontSize: { xs: "16px", sm: "24px" }, // Responsive font size
            }}
          >
            Experience the finest cuisine in town, made from the freshest ingredients and prepared by our world-class chefs. Whether you're craving a cozy meal or a grand feast, we've got something special for you.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff7f50", // More subtle color for button
              color: "white",
              borderRadius: "8px", // Slightly more rounded button
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "18px" }, // Responsive font size
              paddingY: { xs: "8px", sm: "10px" }, // Responsive padding
              paddingX: { xs: "12px", sm: "20px" }, // Responsive horizontal padding
              transition: "0.4s", // Slower transition for smooth interaction
              "&:hover": {
                backgroundColor: "#ff4500", // Deeper orange on hover
                transform: "scale(1.1)", // Larger hover effect
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)", // Add a larger shadow on hover
              },
            }}
            onClick={() => navigate("/menu")}
          >
            Order Now
          </Button>
        </Box>
      </Box>
    </div>
  );
}
