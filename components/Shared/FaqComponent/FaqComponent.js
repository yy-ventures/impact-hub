import React, { useState } from "react";

const FaqComponent = () => {
  const [answer, setAnswer] = useState(false);
  const toggle = () => {
    setAnswer(!answer);
  };
  return (
    <div className="faq-component">
      <h2>
        Questions...................<span className={answer && "rotate"} onClick={toggle}></span>
      </h2>

      <div className={`faq-component_answer ${answer && "show"}`}>
        <p>answer...............</p>
        <p>answer...............</p>
        <p>answer...............</p>
        <p>answer...............</p>
      </div>
    </div>
  );
};

export default FaqComponent;
