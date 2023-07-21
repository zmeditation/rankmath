import * as React from "react";
import { Box, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CustomTypography from "../components/base/CustomTypography";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import IosShareIcon from "@mui/icons-material/IosShare";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "0px 20px",
  position: "relative",
  paddingBottom: "20px",
  height: "18%",
  alignItems: "flex-end",
  "& .header-text": {
    fontSize: "28px",
    color: "#4C5968",
    fontWeight: "bold",
    paddingTop: "2px",
    letterSpacing: 0,
    fontFamily: '"Source Sans Pro", sans-serif',
  },
  "& .button-group": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "fit-content",
  },
  [theme.breakpoints.down(500)]: {
    paddingBottom: "10px",
  },
  "&.mini-size": {
    paddingBottom: "10px",
    "& .header-text": {
      fontSize: "20px",
    },
  },
}));

const StyledArrowIcon = styled(ChevronLeftSharpIcon)(({ theme }) => ({
  fontSize: "40px",
  color: "rgba(174, 184, 196, 1)",
  cursor: "pointer",
}));

const StyledMoreIcon = styled(MoreVertIcon)(({ theme }) => ({
  fontSize: "30px",
  color: "rgba(174, 184, 196, 1)",
  cursor: "pointer",
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: "4px !important",
}));

const StyledIconBtn = styled(IconButton)(({ theme }) => ({
  padding: "3px",
}));

const StyledPhoneImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  position: "absolute",
  zIndex: -4,
}));

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "#4C5968",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      justifyContent: "space-between",
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "&:hover": {
        background: "transparent",
      },
    },
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledHeader className={windowHeight <= 667 ? "mini-size" : ""}>
      <StyledPhoneImg src="/img/header.png" />
      <div className="button-group">
        <StyledIconBtn>
          <StyledArrowIcon />
        </StyledIconBtn>
        <Typography className="header-text">Bitcoin Wallet</Typography>
        <div>
          <StyledIconBtn id="demo-customized-button" onClick={handleClick}>
            <StyledMoreIcon />
          </StyledIconBtn>

          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <CustomTypography color="black" type="middle">
                Edit
              </CustomTypography>
              <EditIcon />
            </MenuItem>
            <StyledDivider />
            <MenuItem onClick={handleClose} disableRipple>
              <CustomTypography color="black" type="middle">
                Courier info
              </CustomTypography>
              <ContentPasteIcon />
            </MenuItem>
            <StyledDivider />
            <MenuItem onClick={handleClose} disableRipple>
              <CustomTypography color="black" type="middle">
                Share
              </CustomTypography>
              <IosShareIcon />
            </MenuItem>
            <StyledDivider />
            <MenuItem onClick={handleClose} disableRipple>
              <CustomTypography color="black" type="middle">
                Remove
              </CustomTypography>
              <RemoveCircleOutlineIcon />
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
