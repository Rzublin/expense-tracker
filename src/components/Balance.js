import React, { Fragment, useContext } from "react";
import TransactionsContext from "../store/transactions/Context";

function Balance() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>€ {transactions.reduce((a, b) => a + b.amount, 0)}</h1>
    </Fragment>
  );
}

export default Balance;
