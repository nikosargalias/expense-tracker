import React from "react";
import { connect } from "react-redux";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null,
    };
  }

  handleTextFilter(e) {
    this.props.dispatch(setTextFilter(e.target.value));
  }

  handleSort(e) {
    switch (e.target.value) {
      case "amount":
        this.props.dispatch(sortByAmount());
        return;
      case "date":
        this.props.dispatch(sortByDate());
        return;
    }
  }
  onDatesChange({ startDate, endDate }) {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  setCalendarFocus(calendarFocused) {
    this.setState({ calendarFocused });
  }

  render = () => (
    <div className="sort">
      <label htmlFor="filter-expenses">Filter expenses</label>
      <input
        id="filter-expenses"
        type="text"
        placeholder="water"
        value={this.props.filters.text}
        onChange={this.handleTextFilter.bind(this)}
      />

      <select onChange={this.handleSort.bind(this)} name="sort" id="">
        <option value="amount">Amount</option>
        <option value="date">Date</option>
      </select>

      <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange.bind(this)}
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        startDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={this.setCalendarFocus.bind(this)}
        displayFormat="DD/MM/YYYY"
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseListFilters);
