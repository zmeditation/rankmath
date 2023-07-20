import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";

type IconBtnProps = {
  icon: ReactNode;
  type: string;
};

const StyledIconBtn = styled("span")(({ theme }) => ({
  padding: "10px",
  borderRadius: "100px",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&.yellow": {
    background: "linear-gradient(to bottom, #ffc843, #ff8f17)",
  },
  "&.blue": {
    background: "linear-gradient(to bottom, #17c8fc, #1d73f1)",
  },
  "&.red": {
    background: "linear-gradient(to bottom, #fb23a2, #ff677c)",
  },
  "& svg": {
    marginBottom: "1px",
    fontSize: "25px",
    fontWeight: "bold",
    color: "white",
  },
  "& span": {
    marginBottom: "1px",
    fontSize: "23px",
    fontWeight: "bold",
    color: "white",
  },
}));

const IconBtn: React.FC<IconBtnProps> = ({ icon, type }) => {
  return <StyledIconBtn className={type}>{icon}</StyledIconBtn>;
};

export default IconBtn;
