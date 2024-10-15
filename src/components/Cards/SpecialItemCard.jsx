import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const SpecialItemCard = ({ img, title, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 10px 20px 0px #00000024",
        padding: { md: "15px", xs: "10px" },
        borderRadius: "25px",
        minWidth: { md: "17vw", xs: "10vw" },
      }}
    >
      <Box
        component={"img"}
        src={img}
        sx={{
          width: { md: "90px", xs: "50px" },
          height: { md: "90px", xs: "50px" },
          objectFit: "contain",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "5px",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ color: "#2C2C2C", fontSize: "18px", fontWeight: 600 }}
        >
          {title}
        </Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography
          sx={{ fontSize: "18px", fontWeight: 600, color: "#515151" }}
        >
          <span style={{ fontSize: "14px", color: "#FF7979" }}>$ </span>18.00
        </Typography>
      </Box>
    </Box>
  );
};

export default SpecialItemCard;
