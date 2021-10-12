import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";
import dateTimeFormat from "../helpers/Intl-date-time-format";

export const ExpenseListItem = ({
  description,
  amount,
  createdAt,
  id,
  dispatch,
} = {}) => {
  const handleRemoveItem = () => {
    dispatch(removeExpense(id));
  };

  return (
    <li>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {dateTimeFormat.format(createdAt)}
      </p>
      <button onClick={handleRemoveItem}>Remove Item</button>
    </li>
  );
};

export default connect()(ExpenseListItem);
