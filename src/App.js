import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import TransactionAddItem from "./components/TransactionAddItem";
import TransactionsProvider from "./store/transactions/Provider";
import "./App.css";

function App() {
  return (
    <div>
      <TransactionsProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <TransactionAddItem />
        </div>
      </TransactionsProvider>
    </div>
  );
}

export default App;
