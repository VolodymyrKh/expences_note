import React from "react";

const Alert = ({ type, text, show }) => {
  return <div className={`alert ${show ? "alert-" + type : ""} `}>{text}</div>;
};

Alert.defaultProps = {
  text: "This is Alert component",
  show: false,
};

export default Alert;
