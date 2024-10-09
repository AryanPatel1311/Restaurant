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

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            align="left"
            sx={{
              color: "#FF6868",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            Testimonials
          </Typography>
          <Typography
            align="left"
            sx={{
              color: "#000000",
              fontSize: "52px",
              fontWeight: 800,
              width: { md: "40vw", xl: "30vw" },
            }}
          >
            Standout Dishes From Our Menu
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
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
