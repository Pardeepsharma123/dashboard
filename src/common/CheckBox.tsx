import React, { Fragment } from "react";
import "./CheckBox.css";

const CheckBox = () => {
  // Only for the first checkbox, which is controlled
  const [isChecked, setIsChecked] = React.useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Fragment>
      <label className="container">
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </Fragment>
  );
};

export default CheckBox;
