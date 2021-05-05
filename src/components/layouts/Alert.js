import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div id="alert" className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong><i className="fa fa-question-circle"></i></strong> {alert.msg}
      </div>
    )
  );
};
export default Alert;
