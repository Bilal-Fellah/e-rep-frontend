import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { mainTheme } from "../../themes/MainTheme";

const theme = mainTheme;
const removePaddingFromNavEl = theme.breakpoints.down(2000);

export const NavigationList = ({ pages }) => {
  const navigate = useNavigate();
  // console.log(pages);
  const { language } = useContext(LanguageContext);

  const handlNav = async (path) => {
    if (path !== "") {
      navigate(path);
    } else {
      console.log("couldnt navigate: " + path);
    }
  };
  return (
    <List sx={{ display: "flex", width: "auto" }}>
      {pages &&
        pages.length > 0 &&
        pages.map((item) => (
          <ListItem key={item["title_" + language]}>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "#333",
                px: removePaddingFromNavEl && 0,
              }}
              onClick={() => handlNav(item.path)}
            >
              <ListItemText
                disableTypography
                primary={item["title_" + language]}
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  textWrap: "nowrap",
                  px: 1 / 2,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
};

NavigationList.propTypes = {
  pages: PropTypes.array,
};
