import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment(0),
  endDate: moment(0),
  // startDate: moment().subtract(30, "days"),
  // endDate: moment(),
};

const filtersReducer = (
  prevState = filtersReducerDefaultState,
  { type, filter } = action
) => {
  switch (type) {
    case "SET_TEXT_FILTER":
      return { ...prevState, ...filter };
    case "SET_START_DATE":
      return { ...prevState, ...filter };
    case "SET_END_DATE":
      return { ...prevState, ...filter };
    case "SORT_BY_DATE":
      return { ...prevState, sortBy: "date" };
    case "SORT_BY_AMOUNT":
      return { ...prevState, sortBy: "amount" };
    default:
      return prevState;
  }
};

export { filtersReducer as default };
