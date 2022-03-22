import React from "react";

const FaqIcon = ({ onClick, className }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.905 11.858"
    >
      <path
        id="Icon_awesome-caret-down"
        data-name="Icon awesome-caret-down"
        d="M2.2,13.5H20.292a1.4,1.4,0,0,1,.991,2.4l-9.042,9.049a1.409,1.409,0,0,1-1.99,0L1.209,15.9A1.4,1.4,0,0,1,2.2,13.5Z"
        transform="translate(21.699 25.358) rotate(180)"
        fill="#802a2a"
      />
    </svg>
  );
};

export default FaqIcon;
