import React from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

//const now = moment();

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? props.expense.amount : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calenderFocus: false,
			error: ''	
		}
	}
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => {
			return {
				description
			}
		});
	}
	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => {
			return {
				note
			}
		});
	}
	onAmountChange = (e) => {
		const amount = e.target.value;
		this.setState(() => {
			return {
				amount
			}
		});
	}
	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => {
				return {
					createdAt
				}
			});
		}
	}
	onFocusChange = ({focused}) => {
		this.setState(() => {
			return {
				calenderFocus: focused
			}
		});
	}
	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			this.setState(() => {
				return {
					error: 'Please enter description and amount'
				}
			});
		} else {
			this.setState(() => {
				return {
					error: ''
				}
			});
			this.props.onSubmit({
				description: this.state.description,
				amount: this.state.amount,
				note: this.state.note,
				createdAt: this.state.createdAt.valueOf()
			});
		}
	}
	render() {
		return (
			<div>
				{this.state.error}
				<form onSubmit={this.onSubmit}>
					<input type="text" placeholder="Description" value={this.state.description}
					onChange={this.onDescriptionChange}
					/>
					<input type="text" placeholder="Amount" value={this.state.amount}
					onChange={this.onAmountChange} />
					<SingleDatePicker 
						date = {this.state.createdAt}
						onDateChange = {this.onDateChange}
						focused = {this.state.calenderFocus}
						onFocusChange = {this.onFocusChange}
						numberOfMonths = {1}
						isOutsideRange = {() => false}
					/>
					<textarea placeholder="Add note" value={this.state.note}
					onChange={this.onNoteChange}></textarea>
					<button>Add expense</button>
				</form>
			</div>
		);
	}
}