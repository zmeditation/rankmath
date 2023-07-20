import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

type CustomTypographyProps = {
  children: ReactNode;
  color: string;
  type: string;
};

const StyledCustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Source Sans Pro", sans-serif',
  fontWeight: 600,
  lineHeight: 1,
  "&.large1": {
    fontSize: "30px",
  },
  "&.large2": {
    fontSize: "18px",
  },
  "&.middle": {
    fontSize: "13px",
  },
  "&.small": {
    fontSize: "12.5px",
  },
  "&.black": {
    color: "#4C5968",
  },
  "&.grey": {
    color: "#AEB8C4",
  },
  "&.white": {
    color: "#FFFFFF",
  },
}));

const CustomTypography: React.FC<CustomTypographyProps> = ({
  children,
  color,
  type,
}) => {
  return (
    <StyledCustomTypography className={`${color} ${type}`}>
      {children}
    </StyledCustomTypography>
  );
};

export default CustomTypography;
