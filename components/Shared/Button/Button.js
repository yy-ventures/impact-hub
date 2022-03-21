import React, { useState } from "react";
import ButtonPrimarySVG from "./ButtonPrimarySVG";
import ButtonSecondarySVG from "./ButtonSecondarySVG";
const Button = ({ text = "button", type = "primary" }) => {
  // Button State to toggle active and inactive state of the button
  const [buttonState, setButtonState] = useState(false);
  // Toggles the button state on click from active to inactive or vice-versa
  const toggleState = () => {
    setButtonState(true);
  };
  // set the class name based on the button properties
  // Initial class => 'btn-component'
  // Class name => Initial class + Type + Button State (active/inactive)
  const className = `btn-component ${
    buttonState ? `btn-component_${type}_active ${type}_active` : `btn-component_${type}`
  }`;

  return (
    <button className={className} onClick={() => toggleState()}>
      {type === "primary" ? <ButtonPrimarySVG /> : <ButtonSecondarySVG />}
      <p>{text}</p>
    </button>
  );
};

export default Button;
