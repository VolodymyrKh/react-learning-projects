import React, { useEffect } from "react";

const Alert = ({ type, message, list, hideAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlert();
    }, 2750);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);

  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
