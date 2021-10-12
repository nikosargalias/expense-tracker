import { createStore, combineReducers } from "redux";
import idsReducer from "../reducers/idsReducer";
import expenseReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      ids: idsReducer,
      expenses: expenseReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore();
