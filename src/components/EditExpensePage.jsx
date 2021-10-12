import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  const handleEditExpense = (updates) => {
    props.dispatch(editExpense({ id: props.expense.id, updates }));
    props.history.push("/");
  };

  const handleRemoveExpense = () => {
    props.dispatch(removeExpense(props.expense.id));
    props.history.push("/");
  };

  return (
    <div>
      <h3>Editing {props.expense.description}</h3>
      <ExpenseForm expense={props.expense} onSubmit={handleEditExpense} />
      <button onClick={handleRemoveExpense}>Remove Expense</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const expense = state.expenses.find(
    (expense) => expense.id === Number(props.match.params.id)
  );

  return {
    expense,
  };
};

export default connect(mapStateToProps)(EditExpensePage);
