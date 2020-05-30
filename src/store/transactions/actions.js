import * as transactionTypes from "./types";

/* {
    text: "Camera", 
    amount: -200
} */

export function addTransaction(text, amount) {
  return {
    type: transactionTypes.ADD_TRANSACTION,
    payload: {
      text,
      amount,
    },
  };
}

export function removeTransaction(text) {
  return {
    type: transactionTypes.REMOVE_TRANSACTION,
    payload: {
      text,
    },
  };
}
