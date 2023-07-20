import React from "react";
import CustomTypography from "./base/CustomTypography";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import DotwithColor from "./base/DotwithColor";

type CurrentpriceItemProps = {
  price: string;
};

const StyledCurrentpriceItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  bottom: "20px",
  zIndex: 1,
}));

const CurrentpriceItem: React.FC<CurrentpriceItemProps> = ({ price }) => {
  return (
    <StyledCurrentpriceItem>
      <DotwithColor type="small" />
      <CustomTypography color="black" type="middle">
        1 BTC = ${price}
      </CustomTypography>
    </StyledCurrentpriceItem>
  );
};

export default CurrentpriceItem;
