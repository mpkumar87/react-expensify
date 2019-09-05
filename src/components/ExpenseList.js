import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import selectExpenses from '../selectors/expenses.js';

const ExpenseList = (props) => {
	return (
		<div>
			<h1>Expense List</h1>
			{
				props.expenses.map((expense) => {
					return <ExpenseListItem key={expense.id} {...expense} />
				})
			}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	}
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;