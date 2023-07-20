import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";

type CardProps = {
  children: ReactNode;
};

const StyledCard = styled("div")(({ theme }) => ({
  background: "rgba(255, 255, 255, 1)",
  width: "100%",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  position: "relative",
}));

const Card: React.FC<CardProps> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
