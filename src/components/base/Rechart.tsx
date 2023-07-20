import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { styled } from "@mui/material/styles";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
];

type RechartProps = {
  dateType: string;
};

const StyledRechart = styled("div")(({ theme }) => ({
  width: "100%",
  marginLeft: "-20px",
  marginBottom: "-20px",
}));

const Rechart: React.FC<RechartProps> = ({ dateType }) => {
  return (
    <StyledRechart>
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
        <Area type="monotone" dataKey="uv" stroke="#ff8f17" fill="#fff7ee" />
      </AreaChart>
    </StyledRechart>
  );
};

export default Rechart;
