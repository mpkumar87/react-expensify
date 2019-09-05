import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<header>
		<h1>Portfolio</h1>
		<NavLink activeClassName="active" to="/" exact={true}>Home</NavLink>
		<NavLink activeClassName="active" to="/create">Create Expense</NavLink>
		<NavLink activeClassName="active" to="/help">Help</NavLink>
		</header>
	);
}

export default Header;