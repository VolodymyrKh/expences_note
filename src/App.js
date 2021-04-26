import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import Alert from "./components/Alert";
import { v4 as uuid } from "uuid";

const initialExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
 console.log(initialExpenses);

function App() {
  // state, useState
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  // useEffect
  useEffect(() => {
    console.log("this is useEffect");
    localStorage.setItem('expenses', JSON.stringify(expenses))
  },[expenses]);

  // functionality
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge.trim() && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ show: true, type: "success", text: "item was edited" });
      } else {
        setExpenses([...expenses, { charge, amount, id: uuid() }]);
        handleAlert({ type: "success", text: "item was added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({ type: "danger", text: "please fill the form" });
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const clearList = () => {
    setExpenses([]);
    handleAlert({ show: true, type: "success", text: "list is clear" });
  };

  const handleDelete = (id) => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(filteredExpenses);
    handleAlert({ show: true, type: "success", text: "item was deleted" });
  };

  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      <Alert {...alert} />
      <h1>budget calculator</h1>
      <main className="App">
        <Form
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <List
          expenses={expenses}
          handleClearList={clearList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
      <h1>
        total expenses:
        <span className="total">
          $
          {expenses.reduce((acc, item) => {
            return (acc += parseInt(item.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
