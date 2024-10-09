import { Box, Typography } from "@mui/material";
import React from "react";

const CatagoryCard = ({ img, name, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        boxShadow: "2px 10px 30px 0px #0000001A",
        borderRadius: "40px",
        padding: "20px 60px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#C1F1C6",
          width: "100px",
          height: "100px",
          borderRadius: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component={"img"}
          src={img}
          sx={{ width: "60px", height: "60px" }}
        />
      </Box>
      <Typography
        align="center"
        sx={{ color: "#1E1E1E", fontSize: "24px", fontWeight: 600 }}
      >
        {name}
      </Typography>
      <Typography
        align="center"
        sx={{ color: "#555555", fontSize: "18px", fontWeight: 500 }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default CatagoryCard;
