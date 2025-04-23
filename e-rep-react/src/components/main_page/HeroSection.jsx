import { Typography } from "@mui/material";

export const HeroSection = () => {
  return (
    <div>
      <Typography
        variant="h2"
        component="h1"
        color="primary.main"
        sx={{
          mb: 2,
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          maxWidth: "800px",
        }}
      >
        Know What People Are Saying About Your Business
      </Typography>

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{
          mb: 6,
          maxWidth: "700px",
          mx: "auto",
        }}
      >
        Monitor, analyze, and improve your online reputation with our powerful
        analytics platform
      </Typography>
    </div>
  );
};
