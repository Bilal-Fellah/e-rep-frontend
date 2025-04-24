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
import { navItems } from "../../constants/nav-items";

// icons
import {
  KeyboardArrowDown as ArrowDownIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";
import ALGIcon from "/assets/icons/algeria-icon.png";
import USAIcon from "/assets/icons/usa-icon.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
export const Header = () => {
  // states & hooks
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  // variables from other files
  const { language, changeLanguage } = useContext(LanguageContext);
  const theme = mainTheme;
  const headerItems = navItems;

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
  // console.log(headerItems);

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

            {showNav ? (
              <Box>
                {headerItems &&
                  headerItems.length > 0 &&
                  headerItems.map((item, index) => {
                    return (
                      <Button key={index} color="primary" variant="text">
                        {item.title_en}
                      </Button>
                    );
                  })}
              </Box>
            ) : (
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuRoundedIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {headerItems.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleNavMenuClick(item.path)}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {item["title_" + language]}
                      </Typography>
                    </MenuItem>
                  ))}

                  <MenuItem>
                    <Select
                      value={language}
                      onChange={(e) => changeLanguage(e.target.value)}
                    >
                      <MenuItem value="en">
                        <IconButton>
                          <img
                            className="language-img"
                            src={USAIcon}
                            alt="english-language-icon"
                            style={{ width: 30, height: 30 }}
                          />
                        </IconButton>
                      </MenuItem>
                      <MenuItem value="ar">
                        <IconButton>
                          <img
                            className="language-img"
                            src={ALGIcon}
                            alt="arabic-language-icon"
                            style={{ width: 30, height: 30 }}
                          />
                        </IconButton>
                      </MenuItem>
                    </Select>
                  </MenuItem>
                </Menu>
              </Box>
            )}

            <Button color="primary" variant="contained" sx={{ ml: 2 }}>
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
