import {
  AreaChart,
  Area,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Area_Chart = () => {
  const products = [
    {
      name: "Jan",
      Nike: 1890,
      Addidas: 2181,
    },
    {
      name: "Feb",
      Nike: 2164,
      Addidas: 2490,
    },
    {
      name: "Mar",
      Nike: 1600,
      Addidas: 1984,
    },
    {
      name: "Apr",
      Nike: 2590,
      Addidas: 2690,
    },
    {
      name: "May",
      Nike: 2690,
      Addidas: 3010,
    },
    {
      name: "Jun",
      Nike: 2490,
      Addidas: 2789,
    },
    {
      name: "Jul",
      Nike: 1980,
      Addidas: 2749,
    },
    {
      name: "Aug",
      Nike: 1980,
      Addidas: 2849,
    },
    {
      name: "Sep",
      Nike: 2080,
      Addidas: 2749,
    },
    {
      name: "Oct",
      Nike: 1910,
      Addidas: 2149,
    },
    {
      name: "Nov",
      Nike: 2580,
      Addidas: 1940,
    },
    {
      name: "Dec",
      Nike: 2180,
      Addidas: 2349,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={products}>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip />
        <Legend />

        <Area type="monotone" dataKey="Nike" fill="#1f497e" stackId="1" />
        <Area type="monotone" dataKey="Addidas" fill="#58bb92" stackId="1" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Area_Chart;
