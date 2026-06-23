import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Specific_Chart = () => {
  const products = [
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
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={products}>
          <PolarGrid />

          <PolarAngleAxis dataKey="name" />

          <PolarRadiusAxis angle={30} domain={[0, 150]} />

          <Radar
            name="Revenue"
            dataKey="Revenue"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />

          <Radar
            name="Visitors"
            dataKey="Visitors"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />

          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Specific_Chart;
