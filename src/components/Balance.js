import React, { Fragment } from "react";

function Balance({ transactions }) {
  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>
        €{" "}
        {transactions
          .map((transaction) => transaction.amount)
          .reduce((a, b) => a + b)}
      </h1>
    </Fragment>
  );
}

export default Balance;
