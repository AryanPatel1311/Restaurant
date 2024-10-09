import { Box, Typography } from "@mui/material";
import React from "react";
import CatagoryCard from "../Cards/CatagoryCard";

const PopularCatagories = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        py: "75px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
        }}
      >
        <Typography
          align="center"
          sx={{
            color: "#FF6868",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: 2.5,
            textTransform: "uppercase",
          }}
        >
          Customer Favorites
        </Typography>
        <Typography
          align="center"
          sx={{ color: "#000000", fontSize: "50px", fontWeight: 800 }}
        >
          Popular Catagories
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <CatagoryCard
          img={"/pngwing 4.png"}
          name={"Main Dish"}
          description={"(86 dishes)"}
        />
        <CatagoryCard
          img={"/pngwing 6.png"}
          name={"Break Fast"}
          description={"(12 break fast)"}
        />
        <CatagoryCard
          img={"/pngwing 3.png"}
          name={"Dessert"}
          description={"(48 dessert)"}
        />
        <CatagoryCard
          img={"/pngwing 4.png"}
          name={"Browse All"}
          description={"(255 Items)"}
        />
      </Box>
    </Box>
  );
};

export default PopularCatagories;
