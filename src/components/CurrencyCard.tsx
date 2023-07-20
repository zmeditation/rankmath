import Card from "./base/Card";
import IconBtn from "./base/IconBtn";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomTypography from "./base/CustomTypography";
import IconButton from "@mui/material/IconButton";

const StyledCryptoName = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CryptoIcon = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const BTCBalance = styled(Box)(({ theme }) => ({
  marginTop: "15px",
  display: "flex",
}));

const USDBalance = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "15px",
}));

const USDBadge = styled("div")(({ theme }) => ({
  background: "rgba(238, 34, 93, 1)",
  borderRadius: "50px",
  padding: "2px 10px",
}));

const ViewMore = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
}));

const StyledDownIcon = styled("img")(({ theme }) => ({
  width: "30px",
  height: "30px",
  cursor: "pointer",
}));

const StyledUpIcon = styled("img")(({ theme }) => ({
  width: "30px",
  height: "30px",
  cursor: "pointer",
  transform: "rotate(180deg)",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: "8px",
}));

type CurrencyCardProps = {
  showDetails: boolean;
  updateShowStatus: (status: boolean) => void;
};

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  updateShowStatus,
  showDetails,
}) => {
  return (
    <Card>
      <StyledCryptoName>
        <CryptoIcon>
          <IconBtn icon={<CurrencyBitcoinOutlinedIcon />} type="yellow" />
          <CustomTypography color="black" type="middle">
            Bitcoin
          </CustomTypography>
        </CryptoIcon>
        <CustomTypography color="grey" type="middle">
          BTC
        </CustomTypography>
      </StyledCryptoName>
      <BTCBalance>
        <CustomTypography color="black" type="large1">
          3.529020 BTC
        </CustomTypography>
      </BTCBalance>
      <USDBalance>
        <CustomTypography color="grey" type="large2">
          $19.153 USD
        </CustomTypography>
        <USDBadge>
          <CustomTypography color="white" type="middle">
            - 2.32%
          </CustomTypography>
        </USDBadge>
      </USDBalance>
      <ViewMore>
        <StyledIconButton onClick={() => updateShowStatus(!showDetails)}>
          {showDetails ? (
            <StyledUpIcon src="/img/down.svg" alt="down" />
          ) : (
            <StyledDownIcon src="/img/down.svg" alt="down" />
          )}
        </StyledIconButton>
      </ViewMore>
    </Card>
  );
};

export default CurrencyCard;
