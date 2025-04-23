"use client";

import { Typography, Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "../../themes/MainTheme";
import { SearchBar } from "./SearchBar";
import { HeroSection } from "./HeroSection";
import { BottomHero } from "./BottomHero";

// Custom theme
const theme = mainTheme;

function HeroSection2() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ flexGrow: 1, bgcolor: "background.default", minHeight: "100vh" }}
      >
        {/* Hero Content */}
        <Container maxWidth="lg">
          <Box
            sx={{
              mt: { xs: 6, md: 12 },
              mb: { xs: 6, md: 12 },
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <HeroSection />

            <SearchBar />

            <BottomHero />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default HeroSection2;
