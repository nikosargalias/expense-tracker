import "react-dates/initialize";
import React from "react";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";

import moment from "moment";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

export class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense?.description || "",
      amount: props.expense?.amount || "",
      note: props.expense?.note || "",
      createdAt: props.expense?.createdAt
        ? moment(props.expense.createdAt)
        : moment(),
      submitError: false,
      calendarFfocused: false,
    };
  }
  onChangeDescription(e) {
    const description = e.target.value;
    this.setState(() => ({ description: description }));
  }
  onChangeAmount(e) {
    const input = e.target.value;

    if (!input.toString().match(/^[0-9]*(\.\d{0,2})?$/)) {
      console.error(
        "invalid number, must contain a maximum of two decimal places"
      );
      return;
    }

    let amount = parseFloat(input) || "";
    this.setState(() => ({ amount: amount }));
  }
  onChangeNote(e) {
    const note = e.target.value;
    this.setState(() => ({ note: note }));
  }

  onSubmitExpense(e) {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ submitError: true }));
      return;
    }
    this.props.onSubmit({
      description: this.state.description,
      note: this.state.note,
      amount: this.state.amount,
      createdAt: this.state.createdAt.valueOf(),
    });
  }

  onDateChange(createdAt) {
    if (createdAt) {
      this.setState({ createdAt });
    }
  }
  onFocusChange = ({ focused }) => this.setState({ calendarFocused: focused });
  render() {
    return (
      <form className="form" onSubmit={this.onSubmitExpense.bind(this)}>
        <div className="form__group">
          <label htmlFor="description">Description</label>
          <input
            onChange={this.onChangeDescription.bind(this)}
            type="text"
            id="description"
            value={this.state.description}
          />
        </div>
        <div className="form__group">
          <label htmlFor="amount">Amount</label>
          <input
            onChange={this.onChangeAmount.bind(this)}
            type="number"
            id="amount"
            value={this.state.amount}
          />
        </div>
        <div className="form__group">
          <label htmlFor="note">Note</label>
          <textarea
            onChange={this.onChangeNote.bind(this)}
            placeholder="Additional notes about expense (optional)"
            id="note"
            value={this.state.note}
          />
        </div>
        <div className="form__group">
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange.bind(this)}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange.bind(this)}
            id="your_unique_id"
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
        {this.state.submitError && (
          <p className="form__error">Please fill in all fields</p>
        )}
        <button type="submit">
          {this.props.expense ? "Edit Expense" : "Add Expense"}
        </button>
      </form>
    );
  }
}

export default connect()(ExpenseForm);
