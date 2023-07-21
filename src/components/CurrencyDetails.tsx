import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "./base/Card";
import BuySellButton from "./BuySellButton";
import LimitpriceItem from "./LimitpriceItem";
import CurrentpriceItem from "./CurrentpriceItem";
import { BTCprice } from "../config/mock";
import Rechart from "./base/Rechart";

const StyledToggleArea = styled(Box)(({ theme }) => ({
  animation: "fadein 1.5s linear forwards",
  "&.none": {
    animation: "fadeout 1s linear forwards",
  },
}));

const StyledToggleDate = styled(Box)(({ theme }) => ({
  margin: "10px 0px",
  "& .MuiToggleButtonGroup-root": {
    justifyContent: "space-between",
    width: "100%",
  },
  "& .MuiButtonBase-root": {
    background: "transparent",
    border: 0,
    textTransform: "none",
    fontFamily: '"Source Sans Pro", sans-serif',
    fontWeight: 600,
    fontSize: "12.8px",
    color: "#AEB8C4",
    padding: "2px 10px",
    height: "fit-content",
    "&:hover": {
      borderRadius: "50px !important",
    },
  },
  "& .Mui-selected": {
    color: "white !important",
    backgroundColor: "#AEB8C4 !important",
    borderRadius: "50px !important",
  },
}));

const StyledBuySellGroup = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "1fr 1fr",
  marginTop: "20px",
}));

const BalancesMinMax = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  marginBottom: "30px",
  display: "flex",
  justifyContent: "space-between",
}));

type CurrencyDetailsProps = {
  showDetails: boolean;
};

const CurrencyDetails: React.FC<CurrencyDetailsProps> = ({ showDetails }) => {
  const [alignment, setAlignment] = React.useState("day");
  const [lowprice, setLowprice] = React.useState("0");
  const [highprice, setHighprice] = React.useState("0");
  const currentPrice = "5.483";

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    const mockLowprice =
      BTCprice[newAlignment as keyof typeof BTCprice].lowprice;
    setLowprice(mockLowprice);
    const mockHighprice =
      BTCprice[newAlignment as keyof typeof BTCprice].highprice;
    setHighprice(mockHighprice);
  };

  React.useEffect(() => {
    const mockLowprice = BTCprice["day"].lowprice;
    setLowprice(mockLowprice);
    const mockHighprice = BTCprice["day"].highprice;
    setHighprice(mockHighprice);
  }, []);

  return (
    <StyledToggleArea className={!showDetails ? "none" : ""}>
      <StyledToggleDate>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="day" disableRipple>
            Day
          </ToggleButton>
          <ToggleButton value="week" disableRipple>
            Week
          </ToggleButton>
          <ToggleButton value="month" disableRipple>
            Month
          </ToggleButton>
          <ToggleButton value="year" disableRipple>
            Year
          </ToggleButton>
        </ToggleButtonGroup>
      </StyledToggleDate>
      <Card>
        <BalancesMinMax>
          <LimitpriceItem type="low" price={lowprice} />
          <LimitpriceItem type="high" price={highprice} />
        </BalancesMinMax>
        <CurrentpriceItem price={currentPrice} />
        <Rechart dateType={alignment} />
      </Card>
      <StyledBuySellGroup>
        <BuySellButton type="buy" />
        <BuySellButton type="sell" />
      </StyledBuySellGroup>
    </StyledToggleArea>
  );
};

export default CurrencyDetails;
