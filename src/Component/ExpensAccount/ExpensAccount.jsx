import "./ExpensAccount.css";

const ExpensAccount = (props) => {
  const expenseAccount = props.account;

  return (
    <div className="account-container">
      <div className="date-expense colunm-acoount">{expenseAccount.date}</div>
      <div className="account-name colunm-acoount">
        <div className="img-profile">
          <img src={expenseAccount.imageUrl} alt="Profile" width="55px" />
        </div>
        <span>{expenseAccount.name}</span>
      </div>
      <div className="refenece colunm-acoount">{expenseAccount.reference}</div>
      <div className="status colunm-acoount">{expenseAccount.status}</div>
      <div className="account-type colunm-acoount">
        {expenseAccount.accountType}
      </div>
      <div className="account-amount colunm-acoount">
        ${expenseAccount.amount}
      </div>
    </div>
  );
};
export default ExpensAccount;
