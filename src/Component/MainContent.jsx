import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Reports from "../Pages/Reports";
import Expenses from "../Pages/Expenses";
import Budget from "../Pages/Budget";
import Goal from "../Pages/Goal";
import Transaction from "../Pages/Transaction";
import Support from "../Pages/Support";
import Billing from "../Pages/Billing";
import Document from "../Pages/Document";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="reports" element={<Reports />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="budget" element={<Budget />} />
        <Route path="goal" element={<Goal />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="support" element={<Support />} />
        <Route path="billing" element={<Billing />} />
        <Route path="document" element={<Document />} />
      </Routes>
    </>
  );
};
export default Main;
