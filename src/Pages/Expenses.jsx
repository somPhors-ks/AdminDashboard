import "./Expenses.css";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaMoneyBills, FaMoneyBillTransfer } from "react-icons/fa6";
import { SiMoneygram } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { BiFilterAlt } from "react-icons/bi";
import { useState } from "react";
import ExpensAccount from "../Component/ExpensAccount/ExpensAccount";

const accountExpenses = [
  {
    id: 1,
    name: "Peper Porth",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reference: 10,
    status: "Non-Billable",
    accountType: "Vendors",
    amount: 635,
    date: "2 Feb, 2026",
  },
  {
    id: 2,
    name: "Aliceza",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1741914979536-9556ef226c75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    reference: 3,
    status: "Draft",
    accountType: "Employees",
    amount: 349,
    date: "2 Feb, 2026",
  },
  {
    id: 3,
    name: "Arina",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689564003745-946f35267ffe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    reference: 7,
    status: "Billable",
    accountType: "Costumers",
    amount: 135,
    date: "2 Feb, 2026",
  },
  {
    id: 4,
    name: "John Smith",
    imageUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reference: 1,
    status: "Non-Billable",
    accountType: "Vendors",
    amount: 784,
    date: "2 Feb, 2026",
  },
  {
    id: 5,
    name: "Alex",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reference: 3,
    status: "Draft",
    accountType: "Vendors",
    amount: 329,
    date: "2 Feb, 2026",
  },
  {
    id: 6,
    name: "Mantis",
    imageUrl:
      "https://images.unsplash.com/photo-1613063074391-12ed77ac5a13?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reference: 15,
    status: "Billable",
    accountType: "Employees",
    amount: 290,
    date: "2 Feb, 2026",
  },
  {
    id: 7,
    name: "Mamora",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    reference: 5,
    status: "Draft",
    accountType: "Costumers",
    amount: 179,
    date: "2 Feb, 2026",
  },
];

const Expenses = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const items = ["All", "Vendors", "Costumers", "Employees"];

  const filterAccounts =
    selected === "All"
      ? accountExpenses
      : accountExpenses.filter((item) => {
          return item.accountType === selected;
        });

  return (
    <div className="expenses-container">
      <div className="title">
        <p>Expenses</p>
      </div>

      <div className="expenses">
        <div className="add-expenses">
          <p className="expen-title">All Expenses</p>
          <button>+ Add New</button>
        </div>

        <div className="all-expenses">
          <article className="expen-card">
            <div className="expen-icon">
              <FaMoneyBillTransfer className="icon" />
              <span>Total Expenses</span>
            </div>
            <p className="expen-number">$2400</p>
            <p className="desc">+16% Since last month</p>
          </article>

          <article className="expen-card">
            <div className="expen-icon">
              <FaMoneyBills className="icon blue" />
              <span>Today Expenses</span>
            </div>
            <p className="expen-number">$1480</p>
            <p className="desc">+6% Since last month</p>
          </article>

          <article className="expen-card">
            <div className="expen-icon">
              <RiMoneyDollarCircleLine className="icon purple" />
              <span>New Expenses</span>
            </div>
            <p className="expen-number">$2560</p>
            <p className="desc">+2% Since last month</p>
          </article>

          <article className="expen-card">
            <div className="expen-icon">
              <SiMoneygram className="icon red" />
              <span>Expenses Purchase</span>
            </div>
            <p className="expen-number">$3500</p>
            <p className="desc">+12% Since last month</p>
          </article>
        </div>
      </div>

      <div className="vendor-container">
        <div className="filter-vendor">
          <div className="expen-search">
            <GoSearch className="expen-icon-search" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="expen-filter">
            <BiFilterAlt className="expen-icon-search" />

            <div className="dropdown">
              <div className="dropdown-header" onClick={() => setOpen(!open)}>
                <span>{selected}</span>
              </div>

              {open && (
                <div className="dropdown-menu">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="dropdown-item"
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="header-container">
          <div className="header-date-expense colunm-acoount">Date</div>
          <div className="header-name colunm-acoount">Account</div>
          <div className="header-refenece colunm-acoount">Reference</div>
          <div className="header-status colunm-acoount">Status</div>
          <div className="header-account-type colunm-acoount">Account Type</div>
          <div className="header-account-amount colunm-acoount">Amount</div>
        </div>
        <div className="vendor">
          {filterAccounts.map((a) => {
            return <ExpensAccount account={a} key={a.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
