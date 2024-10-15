"use client";
import {
  Badge,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const menuItems = ["Home", "Menu", "Services", "Offers"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        py: 1,
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

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 2,
        }}
      >
        {menuItems.map((item, index) => (
          <Button
            key={index}
            sx={{
              textTransform: "none",
              fontSize: "18px",
              fontWeight: 500,
              color: item === "Home" ? "#39DB4A" : "black",
            }}
          >
            {item}
          </Button>
        ))}
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
              sx={{
                width: "20px",
                height: "20px",
                mr: 1,
                display: { md: "block", xs: "none" },
              }}
            />
          }
          sx={{
            display: { xs: "none", md: "flex" },
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

        <IconButton
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" }, color: "#39DB4A" }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { width: "60%", height: "100%" } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: 2,
            backgroundColor: "white",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: "#39DB4A" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} sx={{ py: 2 }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Typography>
              </ListItem>
            ))}

            {/* Contact button inside the drawer for mobile */}
            <ListItem sx={{ mt: "auto", py: 2 }}>
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
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#32C344",
                  },
                }}
              >
                Contact
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
