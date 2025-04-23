import { Navigate, Outlet, useNavigate } from "react-router";
import {
  Toolbar,
  Button,
  AppBar,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";
import { useContext, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { mainTheme } from "../../themes/MainTheme";
import { pages } from "../../constants/nav-items";

// icons
import {
  Search as SearchIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";

export const Header = () => {
  // states & hooks
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  // variables from other files
  const { language, changeLanguage } = useContext(LanguageContext);
  const theme = mainTheme;

  //  ui variables
  const showNav = useMediaQuery(theme.breakpoints.up(950)) ? true : false;

  // functions
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavMenuClick = (path) => {
    setAnchorElNav(null);
    navigate(path);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
            >
              <AssessmentIcon sx={{ mr: 1, color: "primary.main" }} />
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                RepTrack
              </Box>
            </Typography>
            <Button color="primary" variant="text">
              Features
            </Button>
            <Button color="primary" variant="text">
              Pricing
            </Button>
            <Button color="primary" variant="text">
              About
            </Button>
            <Button color="primary" variant="contained" sx={{ ml: 2 }}>
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
