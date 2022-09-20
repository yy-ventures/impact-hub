import React from "react";

const HeadingDescription = ({
  parentClass,
  span,
  heading,
  content,
  paragraph,
  highlight,
  subHeading,
}) => {
  return (
    <>
      {/* show heading if any*/}
      {heading && (
        <div className={parentClass + "_heading heading-global"}>
          {subHeading ? (
            <div>
              <h2>
                <span>{span && span}</span>
                {heading}
              </h2>
              <p style={{ fontSize: 20 }}>
                Impact Hub Dhaka is conveniently located near the National Zoo
                in Mirpur inside the Grameen Telecom Bhaban. Our event space is
                versatile and designed to support productivity and
                collaboration. With over 2500 sqft, we can host a variety of
                formats- from two person meetings to 80+ person gatherings, and
                even for your next shoot! Our space can be rented on an hourly
                or daily basis. Our event space is available from Sunday to
                Thursday, with weekend bookings possible upon request. We also
                provide dedicated event support!
              </p>
            </div>
          ) : (
            <h2>
              <span>{span && span}</span>
              {heading}
            </h2>
          )}
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
      {paragraph && (
        <p className={parentClass + "_body body-global"}>{paragraph}</p>
      )}
      {/* Show if there is any highlights */}
      {highlight && (
        <>
          <br />
          <p className={parentClass + "_highlight highlight-global"}>
            {highlight}
          </p>
        </>
      )}
    </>
  );
};

export default HeadingDescription;
