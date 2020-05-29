import React from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, removeTransaction }) {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((transaction) => (
            <TransactionItem
              key={transaction.text}
              transaction={transaction}
              removeTransaction={removeTransaction}
            />
          ))}
      </ul>
    </div>
  );
}

export default TransactionList;
