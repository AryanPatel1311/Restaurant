import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        mt: "75px",
        mb: "20px",
        width: "100%",
        px: 2,
      }}
    >
      <Grid container width={"100%"} spacing={3}>
        <Grid item xs={6} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
            <Typography
              sx={{
                fontSize: { md: "20px", xs: "16px" },
                fontWeight: 500,
                color: "#555555",
                width: { md: "15vw", xl: "14vw", xs: "100%" },
                textAlign: "left",
              }}
            >
              Savor the artistry where every dish is a culinary masterpiece
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{
                color: "#000000",
                fontSize: { md: "22px", xs: "18px" },
                fontWeight: 600,
              }}
            >
              Useful links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2px",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                About us
              </Button>{" "}
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                Events
              </Button>{" "}
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                Blogs
              </Button>{" "}
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                FAQ
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{
                color: "#000000",
                fontSize: { md: "22px", xs: "18px" },
                fontWeight: 600,
              }}
            >
              Main Menu
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2px",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                About us
              </Button>{" "}
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                Events
              </Button>{" "}
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                Blogs
              </Button>{" "}
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                FAQ
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{
                color: "#000000",
                fontSize: { md: "22px", xs: "18px" },
                fontWeight: 600,
              }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2px",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                example@email.com
              </Button>{" "}
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                +64 958 248 966
              </Button>{" "}
              <Button
                sx={{
                  textTransform: "none",
                  fontSize: { md: "18px", xs: "16px" },
                  fontWeight: "500",
                  color: "#555555",
                }}
              >
                Social media
              </Button>{" "}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          gap: { md: 20, xs: 2 },
          alignItems: "center",
          width: "100%",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: 100,
              backgroundColor: "#EDFFEF",
              ":hover": {
                backgroundColor: "#39DB4A",
                "& svg": {
                  color: "#ffffff",
                },
              },
            }}
          >
            <FacebookIcon sx={{ color: "#39DB4A" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: 100,
              backgroundColor: "#EDFFEF",
              ":hover": {
                backgroundColor: "#39DB4A",
                "& svg": {
                  color: "#ffffff",
                },
              },
            }}
          >
            <InstagramIcon sx={{ color: "#39DB4A" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: 100,
              backgroundColor: "#EDFFEF",
              ":hover": {
                backgroundColor: "#39DB4A",
                "& svg": {
                  color: "#ffffff",
                },
              },
            }}
          >
            <TwitterIcon sx={{ color: "#39DB4A" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: 100,
              backgroundColor: "#EDFFEF",
              ":hover": {
                backgroundColor: "#39DB4A",
                "& svg": {
                  color: "#ffffff",
                },
              },
            }}
          >
            <YouTubeIcon sx={{ color: "#39DB4A" }} />
          </Box>
        </Box>
        <Typography
          align="center"
          sx={{
            color: "#555555",
            fontSize: { md: "20px", xs: "16px" },
            fontWeight: "500",
            width: { md: "60%", xs: "100%" },
          }}
        >
          Copyright 2023 Dscode | All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
