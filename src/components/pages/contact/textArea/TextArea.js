import React from "react";

import "./TextArea.scss";

const TextArea = (props) => {
  const { label, placeholder, value, onChange, type } = props;

  return (
    <div className="textAreaContainer">
      <label>{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextArea;
