import { addExpense, editExpense } from "./expenses";

test("should return edit expense action object", () => {
  const action = editExpense({ id: 123, updates: { description: "updated" } });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: 123,
    updates: { description: "updated" },
  });
});

test("should return expense action object with provided values", () => {
  const expense = {
    description: "hello",
    note: "foo",
    amount: 34,
    createdAt: 5000,
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expense,
      id: expect.any(Number),
    },
  });
});

test("should return expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      note: "",
      createdAt: expect.any(Number),
      id: expect.any(Number),
    },
  });
});

