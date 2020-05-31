import React, { useContext } from "react";
import TransactionsContext from "../store/transactions/Context";
import * as transactionActions from "../store/transactions/actions";
import PropTypes from "prop-types";

function TransactionItem({ transaction }) {
  const { dispatchTransaction } = useContext(TransactionsContext);
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      <button
        className="delete-btn"
        onClick={() =>
          dispatchTransaction(
            transactionActions.removeTransaction(transaction.text)
          )
        }
      >
        X
      </button>
      <span> {transaction.text}</span>
      <span>{transaction.amount}</span>
    </li>
  );
}

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default TransactionItem;
