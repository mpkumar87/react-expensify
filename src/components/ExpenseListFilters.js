import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters.js';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
	state = {
		calenderFocused: null
	};
	onFocusChange = (focused) => {
		this.setState(() => {
			return {
				calenderFocused: focused
			}
		});
	};
	onDateChange = ({startDate, endDate}) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	render() {
		return (
			<div>
				<input type="text" value={this.props.filters.text} onChange={(e) => {
					this.props.dispatch(setTextFilter(e.target.value));
				}} />
				<select 
					value = {this.props.filters.sortBy}
					onChange={(e) => {
					if (e.target.value === 'date') {
						this.props.dispatch(sortByDate());
					} else {
						this.props.dispatch(sortByAmount());
					}
				}}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
				  startDate = {this.props.filters.startDate}
				  startDateId = "test123"
				  endDate = {this.props.filters.endDate}
				  endDateId = "test456"
				  onDatesChange = {this.onDateChange}
				  focusedInput = {this.state.calenderFocused}
				  onFocusChange = {this.onFocusChange}
				  numberOfMonths = {1}
					isOutsideRange = {() => false}
					showClearDates = {true}
				/>
		</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	}
};

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters