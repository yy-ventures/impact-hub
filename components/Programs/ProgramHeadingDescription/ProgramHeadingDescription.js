import Link from "next/link";
import React from "react";
import TitleSmallBg from "./TitleSmallBg";
const ProgramHeadingDescription = ({ parentClass, span, heading, paragraph, link }) => {
  return (
    <>
      {heading && (
        <div className={parentClass + "_heading heading-global-program"}>
          <div className="title_small_bg">
            <TitleSmallBg />
          </div>
          <h6>
            <span>{span && span}</span>
            {heading}
          </h6>
        </div>
      )}

      {paragraph && <p className={parentClass + "_body body-global-program"}>{paragraph}</p>}
      <div className="program_footer">
        <Link href={link} passHref>
          <a target="__blank">Read More &#x25B6;</a>
        </Link>
      </div>
    </>
  );
};

export default ProgramHeadingDescription;
