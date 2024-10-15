"use client";
import { Box, Typography, IconButton } from "@mui/material";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import MenuCard from "../Cards/MenuCard";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MenuSection = () => {
  const sliderRef = useRef(null);

  // Slider settings
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900, // Change this value as needed
        settings: {
          slidesToShow: 1, // Show 1 card on mobile screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: { md: "75px", xs: "40px" }, px: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#FF6868",
              fontSize: { md: "18px", xs: "16px" },
              fontWeight: 700,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              textAlign: { md: "left", xs: "center" },
            }}
          >
            Testimonials
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: { md: "50px", xs: "25px" },
              fontWeight: 800,
              width: { md: "40vw", xl: "30vw" },
              textAlign: { md: "left", xs: "center" },
            }}
          >
            Standout Dishes From Our Menu
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: { md: 4, xs: 3 } }}>
          <IconButton
            onClick={() => sliderRef.current.slickPrev()}
            aria-label="Previous"
            sx={{
              backgroundColor: "#EFEFEF",
              borderRadius: "50%",
              padding: "10px",
              border: "1px solid #ccc",
              color: "#4CAF50",
              "&:hover": {
                backgroundColor: "#39DB4A",
                color: "white",
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={() => sliderRef.current.slickNext()}
            aria-label="Next"
            sx={{
              backgroundColor: "#EFEFEF",
              borderRadius: "50%",
              padding: "10px",
              border: "1px solid #ccc",
              color: "#4CAF50",
              "&:hover": {
                backgroundColor: "#39DB4A",
                color: "white",
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
      <Box py={2}>
        <Slider ref={sliderRef} {...settings}>
          <MenuCard img={"/Egg salad.png"} />
          <MenuCard img={"/Egg salad.png"} />
          <MenuCard img={"/Egg salad.png"} />
          <MenuCard img={"/Egg salad.png"} />
          <MenuCard img={"/Egg salad.png"} />
        </Slider>
      </Box>
    </Box>
  );
};

export default MenuSection;
