import React from "react";

const HeadingDescription = ({ parentClass, span, heading, content, paragraph, highlight }) => {
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
      {/* show multiple paragraphs if any */}
      {content && (
        <div className={parentClass + "_body body-global"}>
          {content.map((data, index) => {
            return <p key={index}>{data}</p>;
          })}
        </div>
      )}
      {/* If the body contains only a single paragraph */}
      {paragraph && <p className={parentClass + "_body body-global"}>{paragraph}</p>}
      {/* Show if there is any highlights */}
      {highlight && (
        <>
          <br />
          <p className={parentClass + "_highlight highlight-global"}>{highlight}</p>
        </>
      )}
    </>
  );
};

export default HeadingDescription;
