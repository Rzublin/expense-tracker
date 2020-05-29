import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import TransactionAddItem from "./components/TransactionAddItem";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    { text: "Camera", amount: -200 },
    { text: "Book", amount: -40 },
    { text: "Cash", amount: 500 },
  ]);
  const removeTransaction = (transaction) => {
    setTransactions(
      transactions.filter((element) => element.text !== transaction.text)
    );
  };
  return (
    <div>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <TransactionList
          transactions={transactions}
          removeTransaction={removeTransaction}
        />
        <TransactionAddItem
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
    </div>
  );
}

export default App;
