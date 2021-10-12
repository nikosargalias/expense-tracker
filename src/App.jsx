// React
import React from "react";
import ReactDOM from "react-dom";

// Router
import AppRouter from "./routers/AppRouter";

// Redux
import { Provider } from "react-redux";
import store from "./store/configureStore";

// Action Generators
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
// CSS Imports
import "react-dates/lib/css/_datepicker.css";
import "./styles/main.scss";

import "./fixtures/expenses";

// store.dispatch(addExpense({ description: "foo" }));
// store.dispatch(addExpense({ amount: 100 }));
// store.dispatch(addExpense({ description: "bar" }));
// store.dispatch(addExpense({ description: "ter" }));
// setTimeout(() => {
// store.dispatch(addExpense({ description: "mi" }));
//   store.dispatch(setTextFilter("1231"));
// }, 2000);

// const state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#app"));
