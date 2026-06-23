import { CiDeliveryTruck } from "react-icons/ci";
import "./Anomailies.css";
import { TbCurrentLocationFilled, TbWorldCheck } from "react-icons/tb";

const Anomailies = () => {
  const now = new Date();
  const items = [
    {
      id: 1,
      icon: <CiDeliveryTruck />,
      label: "Travel & Transport",
      desc: "Uber rides",
      price: 576,
      anoDate: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`,
    },
    {
      id: 2,
      icon: <TbCurrentLocationFilled />,
      label: "Facilities & Rent",
      desc: "Network sevices",
      price: 472,
      anoDate: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`,
    },
    {
      id: 3,
      icon: <TbWorldCheck />,
      label: "Facilities & Rent",
      desc: "Utilities",
      price: 1672,
      anoDate: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`,
    },
    {
      id: 4,
      icon: <CiDeliveryTruck />,
      label: "Travel & Transport",
      desc: "Uber rides",
      price: 348,
      anoDate: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`,
    },
    {
      id: 5,
      icon: <TbCurrentLocationFilled />,
      label: "Facilities & Rent",
      desc: "Network sevices",
      price: 172,
      anoDate: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`,
    },
    {
      id: 6,
      icon: <TbWorldCheck />,
      label: "Facilities & Rent",
      desc: "Utilities",
      price: 378,
      anoDate: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`,
    },
    {
      id: 7,
      icon: <TbWorldCheck />,
      label: "Facilities & Rent",
      desc: "Utilities",
      price: 457,
      anoDate: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`,
    },
  ];

  return (
    <div className="anomailies-container">
      {items.map((item) => {
        return (
          <div className="item-ano" key={item.id}>
            <div className="ano-profile">
              <span className="icon">{item.icon}</span>
              <div className="ano-name">
                <p>{item.label}</p>
                <span className="desc">{item.desc}</span>
              </div>
            </div>
            <div className="price-ano">
              <p>-{item.price}.00$</p>
              <span className="desc">{item.anoDate}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Anomailies;
