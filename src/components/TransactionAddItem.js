import React, { Fragment, useState, useContext } from "react";
import TransactionsContext from "../store/transactions/Context";
import * as transactionActions from "../store/transactions/actions";

function TransactionAddItem() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { dispatchTransaction } = useContext(TransactionsContext);
  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            if (text && amount) {
              dispatchTransaction(
                transactionActions.addTransaction(text, Number(amount))
              );
              setText("");
              setAmount("");
            }
          }}
        >
          Add Transaction
        </button>
      </form>
    </Fragment>
  );
}

export default TransactionAddItem;
