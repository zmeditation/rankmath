import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CurrencyCard from "../components/CurrencyCard";
import CurrencyDetails from "../components/CurrencyDetails";

const StyledMainContent = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "82%",
  position: "relative",
  background: "rgba(243, 246, 249, 1)",
  padding: "20px",
  overflow: "auto",
  flexDirection: "column",
}));

const MainContent = () => {
  const [showDetails, setShowDetails] = React.useState(false);
  const updateShowStatus = (status: boolean) => {
    setShowDetails(status);
  };
  return (
    <StyledMainContent>
      <CurrencyCard
        updateShowStatus={updateShowStatus}
        showDetails={showDetails}
      />
      {showDetails && <CurrencyDetails />}
    </StyledMainContent>
  );
};

export default MainContent;
