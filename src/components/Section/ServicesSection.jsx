import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../Cards/ServiceCard";

const ServicesSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        justifyContent: "space-between",
        py: "75px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "flex-start",
          width: { md: "44vw", xl: "40vw" },
        }}
      >
        <Typography
          align="left"
          sx={{
            color: "#FF6868",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: 2.5,
            textTransform: "uppercase",
          }}
        >
          Our Story & Services
        </Typography>
        <Typography
          align="left"
          sx={{
            color: "#000000",
            fontSize: "50px",
            fontWeight: 800,
          }}
        >
          Our Culinary Journey And Services
        </Typography>
        <Typography
          sx={{
            color: "#555555",
            fontSize: "24px",
            fontWeight: 500,
          }}
        >
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </Typography>
        <Button
          sx={{
            borderRadius: "40px",
            backgroundColor: "#39DB4A",
            boxShadow: "0px 10px 20px 0px #8EFF9A80",
            color: "#ffffff",
            padding: "14px 20px",
            textTransform: "none",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Explore
          </Typography>
        </Button>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        width={{ xl: "35vw", md: "45vw" }}
      >
        <Grid item xs={12} md={6} xl={6} display="flex">
          <ServiceCard
            img={"/fi-rr-salad.png"}
            title={"Catering"}
            description={
              "Delight your guests with our flavors and presentation"
            }
          />
        </Grid>
        <Grid item xs={12} md={6} xl={6} display="flex">
          <ServiceCard
            img={"/fi-rr-time-fast.png"}
            title={"Fast delivery"}
            description={"We deliver your order promptly to your door"}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={6} display="flex">
          <ServiceCard
            img={"/fi-rr-shopping-cart-check.png"}
            title={"Online Ordering"}
            description={
              "Explore menu & order with ease using our Online Ordering"
            }
          />
        </Grid>
        <Grid item xs={12} md={6} xl={6} display="flex">
          <ServiceCard
            img={"/fi-rr-gift.png"}
            title={"Gift Cards"}
            description={
              "Give the gift of exceptional dining with Foodi Gift Cards"
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesSection;
