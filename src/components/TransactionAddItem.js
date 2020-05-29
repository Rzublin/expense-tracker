import React, { Fragment, useState } from "react";

function TransactionAddItem({ transactions, setTransactions }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
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
              setTransactions([
                ...transactions,
                { text, amount: Number(amount) },
              ]);
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
