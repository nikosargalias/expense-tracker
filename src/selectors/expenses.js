import moment from 'moment';

const selectExpenses = (
    expenses,
    { startDate, endDate, sortBy, text } = {}
) => {
    return expenses
        .filter((expense) => {
            const createdAtMoment = moment(expense.createdAt);

            const startDateMatch =
                !startDate || startDate.isSameOrBefore(createdAtMoment, 'day');
            const endDateMatch =
                !endDate || endDate.isSameOrAfter(createdAtMoment, 'day');
            const textMatch =
                !text ||
                expense.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            }

            if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
            }
        });
};

export default selectExpenses;
