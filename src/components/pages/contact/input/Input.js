import React from "react";

import "./Input.scss";

const input = (props) => {
  const { value, onChange, placeholder, type } = props;

  return (
    <div className="inputContainer">
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default input;
