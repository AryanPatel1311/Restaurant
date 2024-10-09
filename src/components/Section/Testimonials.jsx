import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Testimonials = () => {
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
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component={"img"}
          src="/Mask group.png"
          sx={{
            width: "456px",
            height: "744px",
            zIndex: 1,
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#53EC62",
            borderTopLeftRadius: "140px",
            borderTopRightRadius: "140px",
            borderBottomLeftRadius: "41px",
            borderBottomRightRadius: "41px",
            width: "500px",
            height: "362px",
            zIndex: -1,
            bottom: 0,
            left: 4,
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              bottom: 200,
              left: -25,
              fontSize: "40px",
              transform: "rotate(20deg)",
            }}
          >
            😋
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              bottom: 200,
              right: -25,
              fontSize: "40px",
              transform: "rotate(-80deg)",
            }}
          >
            🍕
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "flex-start",
          mt: 15,
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
          Testimonials
        </Typography>
        <Typography
          align="left"
          sx={{
            color: "#000000",
            fontSize: "50px",
            fontWeight: 800,
          }}
        >
          What Our Customers Say About Us
        </Typography>
        <Typography
          sx={{
            color: "#555555",

            fontSize: "24px",
            fontWeight: 500,
          }}
        >
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AvatarGroup>
            <Avatar
              alt="Remy Sharp"
              src="https://s3-alpha-sig.figma.com/img/b7f6/4445/b32daa2404d37df13cf06f5e790f496a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fhemtezejLWQZfPHtVEj-xXGWjxlO64Vz-ex9jKtI2nPzJ6HtmduMo9OEE2nwqUvdzMk80sZ~15xY~yF8-VVuWn2DfSUmgOMPGHaov5hfPSoEDRnuuLC0JhxflPSqGsLvS2563yckb1Zw8hdrvgDk1OEu1UY8eumltBOIUQft5WVcpse3MqYRa~o3ueuZIcccH7X3fqhS86oc2cBSUTLkwLhnqeo-pBekcI~tDSNLVYniyig0Xvh0nZPPe8hgnW7NfvzHY5iATOvNUla~PJ9sbiuGkRSDwSrxbKuX8QBN3n~3KBoephxFLx3PaFQyJrgKGP66sm2Puo31Bjv-UtuuA__"
            />
            <Avatar
              alt="Travis Howard"
              src="https://s3-alpha-sig.figma.com/img/b7f6/4445/b32daa2404d37df13cf06f5e790f496a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fhemtezejLWQZfPHtVEj-xXGWjxlO64Vz-ex9jKtI2nPzJ6HtmduMo9OEE2nwqUvdzMk80sZ~15xY~yF8-VVuWn2DfSUmgOMPGHaov5hfPSoEDRnuuLC0JhxflPSqGsLvS2563yckb1Zw8hdrvgDk1OEu1UY8eumltBOIUQft5WVcpse3MqYRa~o3ueuZIcccH7X3fqhS86oc2cBSUTLkwLhnqeo-pBekcI~tDSNLVYniyig0Xvh0nZPPe8hgnW7NfvzHY5iATOvNUla~PJ9sbiuGkRSDwSrxbKuX8QBN3n~3KBoephxFLx3PaFQyJrgKGP66sm2Puo31Bjv-UtuuA__"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://s3-alpha-sig.figma.com/img/b7f6/4445/b32daa2404d37df13cf06f5e790f496a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fhemtezejLWQZfPHtVEj-xXGWjxlO64Vz-ex9jKtI2nPzJ6HtmduMo9OEE2nwqUvdzMk80sZ~15xY~yF8-VVuWn2DfSUmgOMPGHaov5hfPSoEDRnuuLC0JhxflPSqGsLvS2563yckb1Zw8hdrvgDk1OEu1UY8eumltBOIUQft5WVcpse3MqYRa~o3ueuZIcccH7X3fqhS86oc2cBSUTLkwLhnqeo-pBekcI~tDSNLVYniyig0Xvh0nZPPe8hgnW7NfvzHY5iATOvNUla~PJ9sbiuGkRSDwSrxbKuX8QBN3n~3KBoephxFLx3PaFQyJrgKGP66sm2Puo31Bjv-UtuuA__"
            />
          </AvatarGroup>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "5px",
            }}
          >
            <Typography sx={{ color: "#000000", fontWeight: 600 }}>
              Customer Feedback
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <StarIcon sx={{ color: "#FFE605" }} />
              <Typography sx={{ color: "#454545", fontWeight: 600 }}>
                4.9{" "}
                <span style={{ color: "#807E7E", fontWeight: 500 }}>
                  {" "}
                  (18.6k Reviews)
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
