"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useMediaQuery,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  Star,
  TrendingUp,
  ThumbUp,
  Block,
  Message,
  BarChart,
} from "@mui/icons-material";
import { mainTheme } from "../../themes/MainTheme";

// Create custom theme based on the RepTrack teal/blue color scheme
const theme = mainTheme;
// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  fontWeight: 700,
  color: theme.palette.primary.dark,
  marginBottom: theme.spacing(1),
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  textAlign: "center",
  maxWidth: 800,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.125rem",
  },
}));

const StatCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
  },
  position: "relative",
  overflow: "visible",
  // Responsive widths
  width: "100%", // fallback
  [theme.breakpoints.down("xs")]: {
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
  [theme.breakpoints.down("md")]: {
    width: "320px",
  },
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    fontSize: "2.25rem",
  },
}));

const StatDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

const StatSource = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: theme.palette.text.secondary,
  fontStyle: "italic",
  marginTop: "auto",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: -20,
  right: 20,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "50%",
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

// Main stats data
const mainStats = [
  {
    value: "87%",
    description: "of Consumers Read Online Reviews",
    subtitle: "Before engaging with a local business",
    source: "Source: BrightLocal",
    icon: <Info />,
  },
  {
    value: "94%",
    description: "of Customers Avoid Businesses With Negative Reviews",
    subtitle: "Even if the business is recommended by someone they know",
    source: "Source: ReviewTrackers",
    icon: <Block />,
  },
  {
    value: "5-9%",
    description: "More Revenue from 1 Star Increase on Yelp",
    subtitle: "Online reputation directly affects revenue",
    source: "Source: Harvard Business Review",
    icon: <TrendingUp />,
  },
];

// Alternative stats data
const alternativeStats = [
  {
    value: "73%",
    description:
      "of Consumers Trust a Business More if It Has Positive Reviews",
    subtitle: "",
    source: "",
    icon: <ThumbUp />,
  },
  {
    value: "13%",
    description:
      "of Customers Will Consider a Business With a Rating Below 3 Stars",
    subtitle: "",
    source: "",
    icon: <Star />,
  },
  {
    value: "44%",
    description:
      "Increase in Customer Trust When Businesses Respond to Reviews",
    subtitle: "",
    source: "",
    icon: <Message />,
  },
  {
    value: "25%",
    description:
      "of a Company's Market Value is Attributed to Online Reputation",
    subtitle: "",
    source: "",
    icon: <BarChart />,
  },
];

export default function ReputationStats() {
  const [showAlternative, setShowAlternative] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  //   const currentStats = showAlternative ? alternativeStats : mainStats;
  const currentStats = mainStats;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 6, backgroundColor: "#f5f7f9" }}>
        <Container maxWidth="lg">
          <SectionTitle variant="h2">
            The Business Impact of Online Reviews
          </SectionTitle>
          <SectionSubtitle variant="subtitle1">
            See how online reputation directly affects your business performance
            and customer decisions
          </SectionSubtitle>

          <Box sx={{ position: "relative", px: { xs: 4, md: 6 }, mt: 5 }}>
            {/* mobile navigation buttons */}
            {!isMobile && (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    left: -20,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <NavigationButton
                    aria-label="previous stats"
                    size="large"
                    onClick={() => setShowAlternative(!showAlternative)}
                  >
                    <ChevronLeft />
                  </NavigationButton>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    right: -20,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <NavigationButton
                    aria-label="next stats"
                    size="large"
                    onClick={() => setShowAlternative(!showAlternative)}
                  >
                    <ChevronRight />
                  </NavigationButton>
                </Box>
              </>
            )}

            <Grid container spacing={4}>
              {currentStats.map((stat, index) => (
                <Grid item columns={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <StatCard elevation={0}>
                    <IconContainer>{stat.icon}</IconContainer>
                    <CardContent sx={{ pt: 3 }}>
                      <StatValue variant="h3">{stat.value}</StatValue>
                      <StatDescription variant="body1">
                        {stat.description}
                      </StatDescription>
                      {stat.subtitle && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2 }}
                        >
                          {stat.subtitle}
                        </Typography>
                      )}
                      {stat.source && (
                        <StatSource variant="caption">{stat.source}</StatSource>
                      )}
                    </CardContent>
                  </StatCard>
                </Grid>
              ))}
            </Grid>

            {/* {isMobile && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setShowAlternative(!showAlternative)}
                  sx={{ borderRadius: 2 }}
                >
                  {showAlternative ? "View Main Stats" : "View More Stats"}
                </Button>
              </Box>
            )} */}
          </Box>

          {/* Call To Action */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(44, 110, 142, 0.2)",
              }}
            >
              Start Monitoring Your Reputation
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
