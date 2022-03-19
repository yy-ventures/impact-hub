import React from "react";

const HeadingDescription = ({ parentClass, span, heading, content }) => {
  return (
    <>
      {/* show heading if any*/}
      {heading && (
        <div className={parentClass + "_heading heading-global"}>
          <h2>
            <span>{span && span}</span>
            {heading}
          </h2>
        </div>
      )}
      {/* show contents if any */}
      {content && (
        <div className={parentClass + "_body body-global"}>
          {content.map((data, index) => {
            return <p key={index}>{data}</p>;
          })}
        </div>
      )}
    </>
  );
};

export default HeadingDescription;
