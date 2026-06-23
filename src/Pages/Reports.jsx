import Linea_Chart from "../Component/Linea_Chart";
import "./Reports.css";

const Reports = () => {
  const saleReport = [
    {
      id: 1,
      title: "Total Sale",
      year: "2021-2022",
      priceCount: "$395,560",
      desc: "+20% Since last year",
    },
    {
      id: 2,
      title: "Total Orders",
      year: "2022-2023",
      priceCount: "1395",
      desc: "-1% Since last year",
    },
    {
      id: 3,
      title: "Total Visitors",
      year: "2023-2024",
      priceCount: "+2000",
      desc: "+5% Since last year",
    },
    {
      id: 4,
      title: "Revenue Growth",
      year: "2024-2025",
      priceCount: "3955",
      desc: "+10% Since last year",
    },
    {
      id: 5,
      title: "Spending",
      year: "2024-2025",
      priceCount: "$4555",
      desc: "+6% Since last year",
    },
    {
      id: 6,
      title: "Incom",
      year: "2024-2025",
      priceCount: "$3250",
      desc: "+3% Since last year",
    },
  ];

  return (
    <div className="report-page-container">
      <div className="title">
        <p>Reports</p>
      </div>

      <div className="report-container">
        <p className="textTitle">Sale Reports</p>
        <div className="sale-report">
          {saleReport.map((s) => {
            return (
              <div
                className={s.id == 2 ? "report-card-active" : "report-card"}
                key={s.id}
              >
                <div className="title-card">
                  <span>{s.title}</span>
                  <span>{s.year}</span>
                </div>
                <p className="report-number">{s.priceCount}</p>
                <span className="desc-report">{s.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="report-chart">
        <p className="textTitle">Sale Staticstic</p>
        <div className="chart">
          <Linea_Chart />
        </div>
      </div>
    </div>
  );
};

export default Reports;
