import "./Sidebar.css";
import {
  TbLayoutDashboardFilled,
  TbPresentationAnalytics,
  TbReportAnalytics,
  TbTransactionDollar,
} from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { LuGoal } from "react-icons/lu";
import { HiOutlineDocumentDuplicate, HiSupport } from "react-icons/hi";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoLogOutOutline, IoSettings } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";

const Sidebar = () => {
  const menuGeneral = [
    {
      id: 1,
      icon: <TbLayoutDashboardFilled />,
      label: "Dashboard",
      routerLink: "/",
    },
    {
      id: 2,
      icon: <TbReportAnalytics />,
      label: "Reports",
      routerLink: "reports",
    },
    {
      id: 3,
      icon: <RiMoneyDollarCircleFill />,
      label: "Expenses",
      routerLink: "expenses",
    },
    {
      id: 4,
      icon: <TbPresentationAnalytics />,
      label: "Budget",
      routerLink: "budget",
    },
    {
      id: 5,
      icon: <LuGoal />,
      label: "Goal",
      routerLink: "goal",
    },
    {
      id: 6,
      icon: <TbTransactionDollar />,
      label: "Transaction",
      routerLink: "transaction",
    },
  ];

  const menuTools = [
    {
      id: 1,
      icon: <HiSupport />,
      label: "Support Center",
      routerLink: "support",
    },
    {
      id: 2,
      icon: <HiOutlineDocumentDuplicate />,
      label: "Document",
      routerLink: "document",
    },
    {
      id: 3,
      icon: <FaMoneyBillWave />,
      label: "Billing",
      routerLink: "billing",
    },
  ];
  const [collaped, setCollapsed] = useState(true);

  const onCollaped = () => {
    if (collaped) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <>
      <div
        className={
          collaped ? "sidebar-container" : "sidebar-container-collapsed"
        }
      >
        <div className="nemu-top">
          <div className="collaped">
            <button onClick={onCollaped}>
              <CgMenu className="collapsed-icon" />
            </button>
            <span className={collaped ? "" : "textHide"}>Menu</span>
          </div>
        </div>

        <div className="menu-container">
          <div className="general-tools">
            <p>General</p>
            <ul className="general-items">
              {menuGeneral.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.routerLink}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <span className="icon-general-tools">{item.icon}</span>
                    <span className={collaped ? "label-name" : "textHide"}>
                      {item.label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="general-tools">
            <p>Tools</p>
            <ul className="general-items">
              {menuTools.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.routerLink}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <span className="icon-general-tools">{item.icon}</span>
                    <span className={collaped ? "label-name" : "textHide"}>
                      {item.label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="action">
          <ul className="general-items">
            <li>
              <a>
                <span className="icon-general-tools">
                  <IoLogOutOutline />
                </span>
                <span className={collaped ? "label-name" : "textHide"}>
                  Log out
                </span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon-general-tools">
                  <IoSettings />
                </span>
                <span className={collaped ? "label-name" : "textHide"}>
                  Setting
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
