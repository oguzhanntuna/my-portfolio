import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = (props) => {
  return (
    <div
      className="loadingSpinner"
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.borderWidth,
        borderBottomColor: props.loadingColor,
      }}
    />
  );
};

export default LoadingSpinner;
