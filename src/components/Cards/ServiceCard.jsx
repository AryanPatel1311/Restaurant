import { Box, Typography } from "@mui/material";
import React from "react";

const ServiceCard = ({ img, title, description }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "7px 12px 43px 0px #00000024",
        borderRadius: "30px",
        padding: "20px 40px",
        gap: 1.5,
        flexGrow: 1,
      }}
    >
      <Box component={"img"} src={img} sx={{ width: "32px", height: "32px" }} />
      <Typography
        align="center"
        sx={{ fontSize: "24px", fontWeight: 600, color: "#5FE26C" }}
      >
        {title}
      </Typography>
      <Typography
        align="center"
        sx={{ fontSize: "18px", fontWeight: 500, color: "#90BD95" }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
