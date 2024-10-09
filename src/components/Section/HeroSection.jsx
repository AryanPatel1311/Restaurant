import { Box } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      sx={{
        py: "150px",
        display: "flex",
        alignItems: "center",
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
        }}
      >
        hello
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
      </Box>
    </Box>
  );
};

export default HeroSection;
