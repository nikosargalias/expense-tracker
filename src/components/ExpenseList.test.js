import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "./ExpenseList";
import expenses from "../fixtures/expenses";

test("should render Expense List correctly", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Expense list with no expenses message", () => {
  const wrapper = shallow(<ExpenseList />);
  expect(wrapper).toMatchSnapshot();
});
