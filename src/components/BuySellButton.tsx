import React from "react";
import { styled } from "@mui/material/styles";
import CustomTypography from "./base/CustomTypography";
import { Box } from "@mui/material";
import IconBtn from "./base/IconBtn";

type BuySellButtonProps = {
  type: string;
};

const StyledBuySellButton = styled("div")(({ theme }) => ({
  background: "rgba(255, 255, 255, 1)",
  width: "100%",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  position: "relative",
  cursor: "pointer",
  transitionDuration: "0.8s",
  "&:hover": {
    background: "#e1e1e1",
  },
}));

const StyledIconContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "10px",
}));

const USDIcon = () => {
  return <span>$</span>;
};

const BuySellButton: React.FC<BuySellButtonProps> = ({ type }) => {
  return (
    <StyledBuySellButton>
      <StyledIconContent>
        <IconBtn type={type === "buy" ? "blue" : "red"} icon={<USDIcon />} />
      </StyledIconContent>
      <CustomTypography color="black" type="middle">
        {type === "buy" ? "Buy" : "Sell"} BTC
      </CustomTypography>
    </StyledBuySellButton>
  );
};

export default BuySellButton;
