import React, { useReducer } from "react";
import TransactionContext from "./Context";
import transactionReducer from "./reducer";

const initialState = [
  { text: "Camera", amount: -200 },
  { text: "Book", amount: -40 },
  { text: "Cash", amount: 500 },
];

function Provider({ children }) {
  const [transactions, dispatchTransaction] = useReducer(
    transactionReducer,
    initialState
  );

  return (
    <TransactionContext.Provider value={{ transactions, dispatchTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export default Provider;
