import { createStore, combineReducers } from 'redux';
import idsReducer from '../reducers/idsReducer';
import expenseReducer, {
    addExpense,
    removeExpense,
    editExpense,
} from '../reducers/expenses';
import filtersReducer, {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
} from '../reducers/filters';
import getVisibleExpenses from '../selectors/expenses.js';

const store = createStore(
    combineReducers({
        ids: idsReducer,
        expenses: expenseReducer,
        filters: filtersReducer,
    })
);

store.subscribe(() => {
    const state = store.getState();
});

// store.dispatch(addExpense());
// store.dispatch(addExpense());
store.dispatch(setStartDate(13));
store.dispatch(setEndDate(16334224589082));
// store.dispatch(setTextFilter("fo"));

store.dispatch(addExpense());
store.dispatch(addExpense({ description: 'foo' }));
store.dispatch(addExpense({ amount: 100 }));
store.dispatch(addExpense({ description: 'foo' }));
store.dispatch(addExpense({ description: 'foo' }));
store.dispatch(addExpense({ description: 'foo' }));
// store.dispatch(editExpense(expense.expense.id, { amount: 500 }));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

export { store };
