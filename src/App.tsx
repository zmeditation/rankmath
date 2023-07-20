import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import "./App.css";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";

const StyledRootContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  aspectRatio: "1/2",
  height: "100vh",
  margin: "auto",
  position: "absolute",
  padding: "25px",
  [theme.breakpoints.down(500)]: {
    width: "100%",
    height: "100%",
    // position: "unset",
  },
}));

const StyledPhoneImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  position: "absolute",
  zIndex: -5,
}));

const StyledTopContent = styled("div")(({ theme }) => ({
  height: "88%",
}));

function App() {
  return (
    <div className="App">
      <StyledRootContainer>
        <StyledTopContent>
          <Header></Header>
          <MainContent />
        </StyledTopContent>
        <Footer />
        <StyledPhoneImg src="/img/phone.png" />
      </StyledRootContainer>
    </div>
  );
}

export default App;
