import React, { useState } from "react";
import FaqIcon from "../../Faq/FaqIcon";

const FaqComponent = () => {
  const [answer, setAnswer] = useState(false);
  // Toggle when clicked
  const toggle = () => {
    setAnswer(!answer);
  };
  // Open the accordion on hover
  const mouseEnter = () => {
    setAnswer(true);
  };
  // Close the accordion when the mouse leaves
  const mouseLeave = () => {
    setAnswer(false);
  };
  return (
    <div
      className={`faq-component ${answer ? "show" : ""}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={toggle}
    >
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas?
        <FaqIcon className={answer && "rotate"} />
      </h2>

      <div className={`faq-component_answer`}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aspernatur minus porro
          deserunt exercitationem odio eligendi laborum minima magnam quia?
        </p>
      </div>
    </div>
  );
};

export default FaqComponent;
