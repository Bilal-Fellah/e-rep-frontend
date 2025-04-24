import { Typography, Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { HeroSection } from "../components/main_page/HeroSection";
import { BottomHero } from "../components/main_page/BottomHero";
import { mainTheme } from "../themes/MainTheme";
import { SearchBar } from "../components/main_page/SearchBar";
import ReputationStats from "../components/main_page/ReputationStats";

export const MainPage = () => {
  const theme = mainTheme;
  return (
    <Box>
      <ThemeProvider theme={theme}>
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

            {/* <BottomHero /> */}
            <Box my={3} />
            <ReputationStats />
          </Box>
        </Container>
      </ThemeProvider>{" "}
    </Box>
  );
};
