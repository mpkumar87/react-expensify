import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses.js';

const AddExpense = (props) => {
	return (
		<div>
			<ExpenseForm 
				onSubmit = {(expense) => {
					props.dispatch(addExpense(expense));
					props.history.push('/');
				}}
			/>
		</div>
	);
}

export default connect()(AddExpense);