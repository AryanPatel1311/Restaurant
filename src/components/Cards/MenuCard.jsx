"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MenuCard = ({ img }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: "2px 10px 30px 0px #0000001A",
        backgroundColor: "#FFFFFF",
        padding: "20px 24px",
        borderRadius: "40px",
        position: "relative",
        minWidth: "320px",
        whiteSpace: "normal",
        mx: { xl: 4, lg: 2, md: 3.5 },
      }}
    >
      <Box
        component={"img"}
        src={img}
        sx={{
          width: "230px",
          height: "230px",
          alignItems: "center",
          alignSelf: "center",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "70px",
          height: "65px",
          borderTopRightRadius: "37.5px",
          borderBottomLeftRadius: "40px",
          backgroundColor: "#39DB4A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? (
          <FavoriteIcon sx={{ alignSelf: "center", color: "#ffffff" }} />
        ) : (
          <FavoriteBorderIcon sx={{ alignSelf: "center", color: "#ffffff" }} />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 1,
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ color: "#000000", fontSize: "24px", fontWeight: 600 }}
        >
          Fattoush salad
        </Typography>
        <Typography
          sx={{ color: "#555555", fontSize: "20px", fontWeight: 600 }}
        >
          Description of the item
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ color: "#000000", fontSize: "20px", fontWeight: 600 }}
        >
          {" "}
          <span style={{ color: "#FF6868", fontSize: "14px", fontWeight: 600 }}>
            $
          </span>
          24.00
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <StarIcon sx={{ color: "#FFE605" }} />
          <Typography sx={{ color: "#454545", fontWeight: 600 }}>
            4.9{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuCard;
