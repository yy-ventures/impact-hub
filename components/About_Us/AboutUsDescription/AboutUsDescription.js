import React from "react";

const AboutUsDescription = ({ parentClass, span, heading, content }) => {
  return (
    <>
      {/* show heading if any*/}
      {heading && (
        <div className={parentClass + "_heading"}>
          <h2>
            <span>{span && span}</span>
            {heading}
          </h2>
        </div>
      )}
      {/* show contents if any */}
      {content && (
        <div className={parentClass + "_body"}>
          {content.map((data, index) => {
            return <p key={index}>{data}</p>;
          })}
        </div>
      )}
    </>
  );
};

export default AboutUsDescription;
