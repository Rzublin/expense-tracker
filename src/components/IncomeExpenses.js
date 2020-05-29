import React from "react";

function IncomeExpenses({ transactions }) {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +€
          {transactions
            .filter((transaction) => transaction.amount >= 0)
            .map((transaction) => transaction.amount)
            .reduce((a, b) => a + b, 0)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -€{" "}
          {transactions
            .filter((transaction) => transaction.amount < 0)
            .map((transaction) => transaction.amount)
            .reduce((a, b) => a + b, 0)}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
