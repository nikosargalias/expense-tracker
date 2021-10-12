import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

// const AddExpensePage = () => <div>AddExpense page</div>;

const AddExpensePage = (props) => {
  const onSubmitExpense = (expense) => {
    props.dispatch(addExpense(expense));
    props.history.push("/");
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <ExpenseForm onSubmit={onSubmitExpense} />
    </div>
  );
};

export default connect()(AddExpensePage);
