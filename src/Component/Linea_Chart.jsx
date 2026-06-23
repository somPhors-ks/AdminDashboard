import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const products = [
  {
    name: "Jan",
    Sale: 1890,
    Orders: 2181,
    Visitors: 2181,
    Revenue: 2181,
  },
  {
    name: "Feb",
    Sale: 1990,
    Orders: 2281,
    Visitors: 2381,
    Revenue: 2881,
  },
  {
    name: "Mar",
    Sale: 2190,
    Orders: 1681,
    Visitors: 1688,
    Revenue: 2581,
  },
  {
    name: "Apr",
    Sale: 2690,
    Orders: 2081,
    Visitors: 2281,
    Revenue: 2181,
  },
  {
    name: "May",
    Sale: 1990,
    Orders: 2281,
    Visitors: 2381,
    Revenue: 2881,
  },
  {
    name: "Jun",
    Sale: 2190,
    Orders: 1681,
    Visitors: 1688,
    Revenue: 2581,
  },
  {
    name: "Jul",
    Sale: 2590,
    Orders: 1981,
    Visitors: 1588,
    Revenue: 2181,
  },
  {
    name: "Aug",
    Sale: 1890,
    Orders: 2681,
    Visitors: 2188,
    Revenue: 1981,
  },
  {
    name: "Sep",
    Sale: 2190,
    Orders: 1981,
    Visitors: 2888,
    Revenue: 1881,
  },
  {
    name: "Oct",
    Sale: 2590,
    Orders: 1981,
    Visitors: 1588,
    Revenue: 2181,
  },
  {
    name: "Nov",
    Sale: 2990,
    Orders: 2181,
    Visitors: 2488,
    Revenue: 2981,
  },
  {
    name: "Dec",
    Sale: 3590,
    Orders: 2981,
    Visitors: 2588,
    Revenue: 3081,
  },
];

const Linea_Chart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={products}>
          <YAxis />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="5 5" />

          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="Sale" fill="#1f497e" stackId="1" />
          <Line type="monotone" dataKey="Orders" fill="#58bb92" stackId="1" />
          <Line type="monotone" dataKey="Visitors" fill="#bd50c1" stackId="1" />
          <Line type="monotone" dataKey="Revenue" fill="#dcd861" stackId="1" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Linea_Chart;
