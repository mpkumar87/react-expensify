import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header.js';
import DashboardExpense from '../components/DashboardExpense.js';
import NotFound from '../components/NotFound.js';
import HelpExpense from '../components/HelpExpense.js';
import AddExpense from '../components/AddExpense.js';
import EditExpense from '../components/EditExpense.js';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" component={DashboardExpense} exact={true} />
				<Route path="/create" component={AddExpense} />
				<Route path="/edit/:id" component={EditExpense} />
				<Route path="/help" component={HelpExpense} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default AppRouter;