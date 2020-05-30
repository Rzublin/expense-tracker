import * as transactionTypes from "./types";

function reducer(state, action) {
  switch (action.type) {
    case transactionTypes.ADD_TRANSACTION:
      return [
        ...state,
        { text: action.payload.text, amount: action.payload.amount },
      ];
    case transactionTypes.REMOVE_TRANSACTION:
      return state.filter((element) => element.text !== action.payload.text);
    default:
      throw new Error();
  }
}

export default reducer;
