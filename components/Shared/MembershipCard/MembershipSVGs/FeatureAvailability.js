import React from "react";

const FeatureAvailability = ({ available }) => {
  return available ? (
    // SVG check
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.504 13.504">
      <path
        id="Path_20"
        data-name="Path 20"
        d="M8.752,2A6.752,6.752,0,1,0,15.5,8.752,6.759,6.759,0,0,0,8.752,2ZM7.4,11.731,4.9,9.23l.953-.956L7.4,9.823l3.574-3.574.955.955L7.4,11.731Z"
        transform="translate(-2 -2)"
        fill="#aae148"
      />
    </svg>
  ) : (
    // SVG cross
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 13.5">
      <path
        id="Path_20"
        data-name="Path 20"
        d="M8.75,2A6.75,6.75,0,1,0,15.5,8.75,6.758,6.758,0,0,0,8.75,2Zm2.84,8.635-.954.954L8.75,9.7,6.865,11.59l-.954-.954L7.8,8.75,5.91,6.865l.954-.954L8.75,7.8,10.635,5.91l.954.954L9.7,8.75l1.885,1.885Z"
        transform="translate(-2 -2)"
        fill="#ee0b4f"
      />
    </svg>
  );
};

export default FeatureAvailability;
