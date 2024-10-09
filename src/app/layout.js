import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import { Box } from "@mui/material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Box
          sx={{
            padding: { md: "10px 50px", xl: "10px 150px" },
            backgroundColor:
              "linear-gradient(180deg, #FAFAFA 0%, #FCFCFC 100%)",
          }}
        >
          <Header />
          {children}
          <Footer />
        </Box>
      </body>
    </html>
  );
}
