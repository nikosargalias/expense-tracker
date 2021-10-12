import moment from "moment";
import filtersReducer from "./filters";

const defaultPrevState = {
  text: "",
  sortBy: "date",
  startDate: moment(0),
  endDate: moment(0),
};

test("should set default state", () => {
  const action = {
    type: "@@INIT",
  };
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: moment(0),
  });
});

test("should set text filter", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    filter: { text: "testing text set" },
  };
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    text: "testing text set",
    sortBy: "date",
    startDate: moment(0),
    endDate: moment(0),
  });
});

test("should set start date", () => {
  const action = {
    type: "SET_START_DATE",
    filter: { startDate: moment().startOf("month") },
  };
  const state = filtersReducer(defaultPrevState, action);
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment(0),
  });
});
