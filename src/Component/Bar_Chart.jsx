import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const products = [
  {
    name: "Jan",
    Revenue: 1290,
  },
  {
    name: "Feb",
    Revenue: 990,
  },
  {
    name: "Mar",
    Revenue: 1450,
  },
  {
    name: "Apr",
    Revenue: 1890,
  },
  {
    name: "May",
    Revenue: 1290,
  },
  {
    name: "Jun",
    Revenue: 1214,
  },
  {
    name: "Jul",
    Revenue: 1475,
  },
  {
    name: "Aug",
    Revenue: 1290,
  },
  {
    name: "Sep",
    Revenue: 1190,
  },
  {
    name: "Oct",
    Revenue: 912,
  },
  {
    name: "Nov",
    Revenue: 1290,
  },
  {
    name: "Dec",
    Revenue: 1567,
  },
];

const Bar_Chart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={products}>
          <YAxis />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />

          <Tooltip />
          <Legend />

          <Bar type="monotone" dataKey="Revenue" fill="#5fb69a" stackId="1" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Bar_Chart;
