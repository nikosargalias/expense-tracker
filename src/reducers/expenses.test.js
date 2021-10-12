import expenses from "../fixtures/expenses";
import expenseReducer from "./expenses";
import moment from "moment";

test("should set detault expenses", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = { type: "REMOVE_EXPENSE", id: 2 };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should add expense", () => {
  const action = { type: "ADD_EXPENSE", expense: expenses[2] };
  const state = expenseReducer([expenses[0]], action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      text: "updated expense",
    },
  };
  const state = expenseReducer([expenses[0], expenses[2]], action);
  expect(state).toEqual([
    expenses[0],
    { ...expenses[2], text: "updated expense" },
  ]);
});
