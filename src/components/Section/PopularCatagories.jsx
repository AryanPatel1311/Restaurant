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
        gap: { md: 10, xs: 5 },
        py: { md: "75px", xs: "40px" },
        px: 4,
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { md: 3, xs: 1 },
          alignItems: "center",
        }}
      >
        <Typography
          align="center"
          sx={{
            color: "#FF6868",
            fontSize: { md: "18px", xs: "16px" },
            fontWeight: 700,
            letterSpacing: 2.5,
            textTransform: "uppercase",
          }}
        >
          Customer Favorites
        </Typography>
        <Typography
          align="center"
          sx={{
            color: "#000000",
            fontSize: { md: "50px", xs: "25px" },
            fontWeight: 800,
          }}
        >
          Popular Catagories
        </Typography>
      </Box>

      {/* Grid Layout for Cards */}
      <Box
        sx={{
          display: "grid",
          gap: 3,
          width: "100%",
          justifyContent: "center",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" }, // 1 column on mobile, 2 on laptop
        }}
      >
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
