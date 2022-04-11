import React, { useState } from "react";
import FaqIcon from "./FaqIcon";

const FaqComponent = ({ question, answer, zIndex }) => {
  const [visible, setVisible] = useState(false);
  // Toggle when clicked
  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className={`faq-component ${visible ? "show" : ""}`} onClick={toggle}>
      <h4 style={{ zIndex: zIndex }}>
        {question}
        <FaqIcon className={visible ? "rotate" : ""} />
      </h4>

      <div className={`faq-component_answer`} style={{ zIndex: zIndex - 1 }}>
        <p dangerouslySetInnerHTML={{ __html: answer }}></p>
      </div>
    </div>
  );
};

export default FaqComponent;
