import selectExpenses from "./expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should filter by text value", () => {
  const filters = {
    text: "u",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    // endDate: moment(0).add(2, "days"),
  };
  expect(selectExpenses(expenses, filters)).toEqual([expenses[2], expenses[0]]);
});

test("should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    // startDate: moment(0),
    endDate: moment(0),
  };
  expect(selectExpenses(expenses, filters)).toEqual([expenses[0], expenses[1]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    // startDate: moment(0),
    // endDate: moment(0),
  };
  expect(selectExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0],
    expenses[1],
  ]);
});

test("should sort by date", () => {
  const filters = {
    sortBy: "date",
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
