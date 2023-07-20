import React from "react";
import { styled } from "@mui/material/styles";
import Card from "./base/Card";
import CustomTypography from "./base/CustomTypography";
import { Box } from "@mui/material";
import IconBtn from "./base/IconBtn";

type BuySellCardProps = {
  type: string;
};

const StyledIconContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "10px",
  "& span": {
    cursor: "pointer",
  },
}));

const USDIcon = () => {
  return <span>$</span>;
};

const BuySellCard: React.FC<BuySellCardProps> = ({ type }) => {
  return (
    <Card>
      <StyledIconContent>
        <IconBtn type={type === "buy" ? "blue" : "red"} icon={<USDIcon />} />
      </StyledIconContent>
      <CustomTypography color="black" type="middle">
        {type === "buy" ? "Buy" : "Sell"} BTC
      </CustomTypography>
    </Card>
  );
};

export default BuySellCard;
