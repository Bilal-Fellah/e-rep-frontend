import {
  Box,
  Button,
  InputAdornment,
  Menu,
  MenuItem,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { mainTheme } from "../../themes/MainTheme";
import { useState } from "react";

import {
  Search as SearchIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";

export const SearchBar = () => {
  const theme = mainTheme;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Facebook");
  const options = ["Facebook", "Instagram", "TikTok"];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option) => {
    if (option && typeof option === "string") {
      setSelectedOption(option);
    }
    setAnchorEl(null);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 1,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        width: "100%",
        maxWidth: "700px",
        borderRadius: "50px",
        overflow: "hidden",
      }}
    >
      <TextField
        placeholder="Enter post URL"
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "50px",
            "& fieldset": { border: "none" },
            height: "56px",
          },
        }}
        sx={{ flexGrow: 1 }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ml: isMobile ? 0 : 1,
          mt: isMobile ? 1 : 0,
          width: isMobile ? "100%" : "auto",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClick}
          endIcon={<ArrowDownIcon />}
          sx={{
            borderRadius: "50px",
            height: "48px",
            mr: 1,
            width: isMobile ? "100%" : "auto",
            textTransform: "none",
          }}
        >
          {selectedOption}
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "50px",
            height: "48px",
            px: 4,
            width: isMobile ? "100%" : "auto",
          }}
        >
          Analyze
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose()}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              onClick={() => handleClose(option)}
              selected={option === selectedOption}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Paper>
  );
};
