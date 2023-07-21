import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { styled } from "@mui/material/styles";
import { priceData } from "../../config/mock";

type RechartProps = {
  dateType: string;
};

const StyledRechart = styled("div")(({ theme }) => ({
  width: "100%",
  marginLeft: "-20px",
  marginBottom: "-20px",
  "& .recharts-surface": {
    overflow: "initial",
  },
}));

const CustomizedDot = (props: any) => {
  const { cx, cy, value } = props;
  if (value[1].toString() === "5.483") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 1024 1024"
        x={cx - 10}
        y={cy - 10}
      >
        <image href="/img/dot_color.png" x="0" y="0" width="100" height="100" />
      </svg>
    );
  }

  return <></>;
};

const Rechart: React.FC<RechartProps> = ({ dateType }) => {
  const data = priceData[dateType as keyof typeof priceData];
  return (
    <StyledRechart>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart
          width={250}
          height={100}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#ff8f17" }} />
                <stop offset="100%" style={{ stopColor: "#ffc843" }} />
              </linearGradient>
            </defs>
          </svg>
          <Area
            type="monotone"
            dataKey="uv"
            strokeWidth={3}
            stroke="url(#gradient)"
            fill="#fff7ee"
            dot={<CustomizedDot />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledRechart>
  );
};

export default Rechart;
