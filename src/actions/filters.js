const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    filter: { text },
  };
};

const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  filter: { startDate: startDate },
});

const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  filter: { endDate: endDate },
});

const sortByDate = () => ({ type: "SORT_BY_DATE" });
const sortByAmount = () => ({ type: "SORT_BY_AMOUNT" });

export { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate };
