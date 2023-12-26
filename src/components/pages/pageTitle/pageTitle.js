import React from "react";
import "./pageTitle.scss";

const PageTitle = (props) => {
  return (
    <div className="pageTitle">
      <span>{props.title}</span>
    </div>
  );
};

export default PageTitle;
