import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import ExpenseListFilters from "./ExpenseListFilters";

export const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      <ExpenseListFilters />
      {(props.expenses && (
        <ul>
          {props.expenses.map((expense, i) => (
            <ExpenseListItem {...expense} key={expense.id} />
          ))}
        </ul>
      )) || <p>No expenses </p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { expenses: selectExpenses(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpenseList);
