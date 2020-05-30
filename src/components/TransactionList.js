import React, { useContext } from "react";
import TransactionsContext from "../store/transactions/Context";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((transaction) => (
            <TransactionItem key={transaction.text} transaction={transaction} />
          ))}
      </ul>
    </div>
  );
}

export default TransactionList;
