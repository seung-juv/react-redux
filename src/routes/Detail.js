import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  return (
    <div>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { id } } } = ownProps;
  return {
    toDo: state.find(toDo => toDo.id === parseInt(id))
  };
};

export default connect(mapStateToProps)(Detail);
