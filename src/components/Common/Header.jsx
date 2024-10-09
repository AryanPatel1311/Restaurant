import { Badge, Box, Button, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <Box
          sx={{
            width: "34px",
            height: "41px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#39DB4A",
            borderRadius: "8px",
          }}
        >
          <Typography
            align="center"
            sx={{ color: "white", fontSize: "20px", fontWeight: 800 }}
          >
            F
          </Typography>
        </Box>
        <Box component={"img"} src="/oodi.png" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "18px",
            fontWeight: "500",
            color: "#39DB4A",
          }}
        >
          Home
        </Button>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "18px",
            fontWeight: "500",
            color: "black",
          }}
        >
          Menu
        </Button>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "18px",
            fontWeight: "500",
            color: "black",
          }}
        >
          Services
        </Button>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "18px",
            fontWeight: "500",
            color: "black",
          }}
        >
          Offers
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
        <SearchIcon />
        <Badge
          badgeContent={8}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#39DB4A",
              color: "white",
              fontSize: "0.7rem",
              minWidth: "18px",
              height: "18px",
              padding: "0 4px",
              fontWeight: 700,
            },
          }}
        >
          <WorkOutlineOutlinedIcon />
        </Badge>
        <Button
          variant="contained"
          startIcon={
            <Box
              component={"img"}
              src="/phone.png"
              sx={{ width: "20px", height: "20px", mr: 1 }}
            />
          }
          sx={{
            backgroundColor: "#39DB4A",
            color: "white",
            borderRadius: "40px",
            textTransform: "none",
            px: "30px",
            fontSize: "18px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#32C344",
            },
          }}
        >
          Contact
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
