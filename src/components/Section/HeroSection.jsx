import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SpecialItemCard from "../Cards/SpecialItemCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const HeroSection = () => {
  return (
    <Box
      sx={{
        py: "130px",
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          width: { md: "40vw", xl: "30vw" },
        }}
      >
        <Typography
          sx={{ color: "#000000", fontSize: "48px", fontWeight: 800 }}
        >
          Dive into Delights Of Delectable{" "}
          <span style={{ color: "#39DB4A" }}>Food</span>
        </Typography>
        <Typography
          sx={{ color: "#4A4A4A", fontSize: "24px", fontWeight: 500 }}
        >
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </Typography>
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Button
            sx={{
              borderRadius: "40px",
              backgroundColor: "#39DB4A",
              boxShadow: "0px 10px 20px 0px #8EFF9A80",
              color: "#ffffff",
              padding: "14px 20px",
              textTransform: "none",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              Order Now
            </Typography>
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{ color: "#4D4D4D", fontSize: "18px", fontWeight: 600 }}
            >
              Watch Video
            </Typography>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "#FFFFFF",
                boxShadow: "6px 27px 34px 0px #0000001A",
                borderRadius: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PlayArrowIcon sx={{ color: "#1E1E1E" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#53EC62",
          width: "522px",
          height: "522px",
          borderRadius: 100,
          position: "relative",
          zIndex: -1,
        }}
      >
        <Box
          component={"img"}
          src="/hero.png"
          sx={{
            width: "600px",
            height: "640px",
            position: "absolute",
            top: -120,
            left: -65,
            zIndex: 1,
            objectFit: "contain",
          }}
        />
        <Box
          component={"img"}
          src="/food.png"
          sx={{
            position: "absolute",
            top: 50,
            left: -100,
            height: "67px",
            width: "240px",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            position: "absolute",
            bottom: -70,
            zIndex: 1,
            left: -90,
          }}
        >
          <SpecialItemCard
            img={"/food2.png"}
            title={"Spicy noodles"}
            value={4}
          />
          <SpecialItemCard
            img={"/food3.png"}
            title={"Spicy noodles"}
            value={3}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
