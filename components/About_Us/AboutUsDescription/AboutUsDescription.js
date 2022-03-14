import React from "react";

const AboutUsDescription = ({ parentClass, heading, content }) => {
  return (
    <>
      <div className={parentClass + "_heading"}>
        <h2>{heading}</h2>
      </div>
      <div className={parentClass + "_body"}>
        {content &&
          content.map((data, index) => {
            return <p key={index}>{data}</p>;
          })}
      </div>
    </>
  );
};

export default AboutUsDescription;
