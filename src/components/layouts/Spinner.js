import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  const style = {
    margin: "auto",
    display: "block",
  };
  return (
    <Fragment>
      <img src={spinner} alt="در حال بارگذاری" style={style} />
      {/* <div
        className="spinner-border"
        style={{width: '3rem',height: '3rem'}}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div> */}
    </Fragment>
  );
};

export default Spinner;
