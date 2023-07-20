import React from "react";
import CustomTypography from "./base/CustomTypography";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

type LimitpriceItemProps = {
  type: string;
  price: string;
};

const StyledLimitpriceItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const StyledColorDot = styled("span")(({ theme }) => ({
  width: "7px",
  height: "7px",
  borderRadius: "50px",
  marginRight: "10px",
  "&.low": {
    backgroundColor: "#ef2755",
  },
  "&.high": {
    backgroundColor: "#1ec070",
  },
}));

const LimitpriceItem: React.FC<LimitpriceItemProps> = ({ type, price }) => {
  return (
    <StyledLimitpriceItem>
      <StyledColorDot className={type} />
      <CustomTypography color="grey" type="small">
        {type === "low" ? "Lower" : "Higher"}: ${price}
      </CustomTypography>
    </StyledLimitpriceItem>
  );
};

export default LimitpriceItem;
