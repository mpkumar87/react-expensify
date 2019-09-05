import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter.js'
import configStore from './store/configStore.js';
import {addExpense} from './actions/expenses.js';
import * as serviceWorker from './serviceWorker';

const store = configStore();

store.dispatch(addExpense({description: 'test', amount: 10, createdAt: 100}));
store.dispatch(addExpense({description: 'demo', amount: 300, createdAt: 1000}));
store.dispatch(addExpense({description: 'sample', amount: 200, createdAt: 10000}));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();