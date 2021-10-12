import moment from 'moment';

const expenses = [
    {
        id: 1,
        description: 'gum',
        note: 'Chew',
        amount: 2000,
        createdAt: 0,
    },
    {
        id: 2,
        description: 'drink',
        note: 'nothing',
        amount: 100,
        createdAt: moment(0).subtract(3, 'days').valueOf(),
    },
    {
        id: 3,
        description: 'Rent',
        note: 'Expensive',
        amount: 4500,
        createdAt: moment(0).add(2, 'days').valueOf(),
    },
];

export default expenses;
