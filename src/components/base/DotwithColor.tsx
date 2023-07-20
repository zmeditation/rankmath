import React from "react";
import { styled } from "@mui/material/styles";

type DotwithColorProps = {
  type: string;
};

const StyledDotwithColor = styled("div")(({ theme }) => ({
  position: "relative",
  height: "100px",
  borderRadius: "50%",
  border: "3px solid rgba(255, 193, 61, 0.26)",
  overflow: "hidden",
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, #ff8f17, #ffc843)",
  },
  "&.small": {
    width: "13px",
    height: "13px",
  },
  "&.large": {
    width: "20px",
    height: "20px",
  },
}));

const DotwithColor: React.FC<DotwithColorProps> = ({ type }) => {
  return <StyledDotwithColor className={type}></StyledDotwithColor>;
};

export default DotwithColor;
