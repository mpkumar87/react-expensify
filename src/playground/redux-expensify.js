import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => {
	return {
		type: 'ADD_EXPENSE',
		expense: {
			id: uuid(),
			description,
			note,
			amount,
			createdAt
		}
	}
};

const removeExpense = ({id} = {}) => {
	return {
		type: 'REMOVE_EXPENSE',
		id
	}
}

const editExpense = (id, updates) => {
	return {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
}

const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter((expense) => {
				return expense.id !== action.id
			});
		case 'EDIT_EXPENSE':
		return state.map((expense) => {
			if (expense.id === action.id) {
				return {
					...expense,
					...action.updates
				}
			} else {
				return expense
			}
		});
		default:
			return state;
	}
}

const setTextFilter = (text = '') => {
	return {
		type: 'SET_TEXT_FILTER',
		text
	}
};

const sortByAmount = () => {
	return {
		type: 'SORT_BY_AMOUNT',
		sortBy: 'amount'
	}
}

const sortByDate = () => {
	return {
		type: 'SORT_BY_DATE',
		sortBy: 'date'
	}
}

const setStartDate = (startDate) => {
	return {
		type: 'SET_START_DATE',
		startDate
	}
}

const setEndDate = (endDate) => {
	return {
		type: 'SET_END_DATE',
		endDate
	}
}

const filtersDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};
const filtersReducer = (state = filtersDefaultState, action) => {
	switch(action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			}
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: action.sortBy
			}
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: action.sortBy
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			}
		default:
			return state;
	}
}

const getVisibleExpenses = (expenses, filters) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof filters.startDate !== 'number' || expense.createdAt >= filters.startDate;
		const endDateMatch = typeof filters.endDate !== 'number' || expense.createdAt <= filters.endDate;
		const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase());
		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (filters.sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (filters.sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	});
};

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

const unsubcribe = store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'test', amount: 10, createdAt: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'demo', amount: 200, createdAt: 1000}));
const expenseThree = store.dispatch(addExpense({description: 'demo', amount: 20, createdAt: 10000}));
store.dispatch(sortByAmount());
/*store.dispatch(removeExpense({id: expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id, {description: 'updated_desc'}));

store.dispatch(sortByDate());
*/
//store.dispatch(setTextFilter('test'));
//store.dispatch(setTextFilter());
//store.dispatch(setStartDate(10));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(9990));

const demoState = {
	expenses:[{
		id: 'test123',
		description: 'This is desc',
		note: 'This is note content',
		amount: 2000,
		createdAt: 0
	}],
	filters: {
		text: 'test',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};