import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "12%",
  position: "relative",
  [theme.breakpoints.down(460)]: {},
}));

const StyledPhoneImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  position: "absolute",
  zIndex: -4,
}));

const StyledFooterBtnGroup = styled(Box)(({ theme }) => ({
  margin: "20px 0px",
  width: "100%",
  "& .MuiToggleButtonGroup-root": {
    justifyContent: "space-around",
    width: "100%",
  },
  "& .MuiButtonBase-root": {
    background: "transparent",
    border: 0,
    height: "fit-content",
    padding: "0px",
    color: "#AEB8C4",
    "& i": {
      fontSize: "24px",
    },
    "& svg": {
      fontSize: "28px",
    },
    "&:hover": {
      color: "#4C5968",
      opacity: 0.8,
    },
  },
  "& .Mui-selected": {
    color: "#4C5968 !important",
    "&:hover": {
      color: "#4C5968",
      opacity: 1,
    },
  },
  [theme.breakpoints.down(500)]: {
    margin: "10px 0px",
    "& .MuiButtonBase-root": {
      "& i": {
        fontSize: "20px",
      },
      "& svg": {
        fontSize: "22px",
      },
    },
  },
  "&.mini-size": {
    margin: "10px 0px",
    "& .MuiButtonBase-root": {
      "& i": {
        fontSize: "20px",
      },
      "& svg": {
        fontSize: "22px",
      },
    },
  },
}));

const Footer = () => {
  const alignment = "wallet";
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {};

  return (
    <StyledFooter>
      <StyledPhoneImg src="/img/footer.png" />
      <StyledFooterBtnGroup className={windowHeight < 667 ? "mini-size" : ""}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="wallet" disableRipple>
            <i className="fa-solid fa-wallet"></i>
          </ToggleButton>
          <ToggleButton value="map" disableRipple>
            <ExploreIcon />
          </ToggleButton>
          <ToggleButton value="alarm" disableRipple>
            <NotificationsIcon />
          </ToggleButton>
          <ToggleButton value="setting" disableRipple>
            <SettingsIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </StyledFooterBtnGroup>
    </StyledFooter>
  );
};

export default Footer;
