import { Box, Typography } from "@mui/material";

export const BottomHero = () => {
  return (
    <div>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        TRY IT NOW and discover important insights about your clients
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          mt: 8,
        }}
      >
        <Box sx={{ textAlign: "center", px: 2 }}>
          <Typography variant="h4" color="primary.main" fontWeight="bold">
            5M+
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Websites Analyzed
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", px: 2 }}>
          <Typography variant="h4" color="primary.main" fontWeight="bold">
            98%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Customer Satisfaction
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", px: 2 }}>
          <Typography variant="h4" color="primary.main" fontWeight="bold">
            24/7
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Real-time Monitoring
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
