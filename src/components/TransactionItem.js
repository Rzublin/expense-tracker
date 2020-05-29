import React from "react";

function TransactionItem({ transaction, removeTransaction }) {
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      <button
        className="delete-btn"
        onClick={() => removeTransaction(transaction)}
      >
        X
      </button>
      <span> {transaction.text}</span>
      <span>{transaction.amount}</span>
    </li>
  );
}

export default TransactionItem;
