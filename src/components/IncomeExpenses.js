import React, { useContext } from "react";
import TransactionsContext from "../store/transactions/Context";

function IncomeExpenses() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +€
          {transactions.length > 0
            ? transactions
                .filter((transaction) => transaction.amount >= 0)
                .reduce((a, b) => a + b.amount, 0)
            : 0}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -€
          {transactions.length > 0
            ? Math.abs(
                transactions
                  .filter((transaction) => transaction.amount < 0)
                  .reduce((a, b) => a + b.amount, 0)
              )
            : 0}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
