import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SpecialItemCard from "../Cards/SpecialItemCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const HeroSection = () => {
  return (
    <Box
      sx={{
        py: { md: "130px", xs: "40px" },
        px: 2,
        display: "flex",
        alignItems: { md: "flex-start", xs: "center" },
        width: "100%",
        justifyContent: { md: "space-between", xs: "center" },
        position: "relative",
        overflow: "hidden",
        flexDirection: { md: "row", xs: "column-reverse" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { md: 4, xs: 2 },
          alignItems: { md: "flex-start", xs: "center" },
          width: { md: "40vw", xl: "30vw", xs: "100%" },
          mt: { xs: 2, md: 0 },
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontSize: { md: "48px", xs: "30px" },
            fontWeight: 800,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Dive into Delights Of Delectable{" "}
          <span style={{ color: "#39DB4A" }}>Food</span>
        </Typography>
        <Typography
          sx={{
            color: "#4A4A4A",
            fontSize: { md: "24px", xs: "18px" },
            fontWeight: 500,
            textAlign: { md: "left", xs: "center" },
          }}
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
          width: { md: "522px", xs: "300px" },
          height: { md: "522px", xs: "295px" },
          borderRadius: 100,
          position: "relative",
          zIndex: -1,
          mt: { md: 0, xs: "40px" },
        }}
      >
        <Box
          component={"img"}
          src="/hero.png"
          sx={{
            width: { md: "600px", xs: "340px" },
            height: { md: "640px", xs: "380px" },
            position: "absolute",
            top: { md: -120, xs: -82 },
            left: { md: -66, xs: -36 },
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
            left: { md: -100, xs: 200 },
            height: "67px",
            width: "240px",
            objectFit: "cover",
            display: { md: "block", xs: "none" },
          }}
        />
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
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
