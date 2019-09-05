import React from 'react';
import ConnectedExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js';

const DashboardExpense = () => {
	return (
		<div>
			<p>This is dashboard expense</p>
			<ExpenseListFilters />
			<ConnectedExpenseList />
		</div>
	);
}

export default DashboardExpense;