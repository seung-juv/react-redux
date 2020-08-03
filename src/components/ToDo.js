import React from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
      </Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: id => dispatch(deleteToDo(ownProps.id))
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
