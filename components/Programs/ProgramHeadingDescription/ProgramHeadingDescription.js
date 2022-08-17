import Link from "next/link";
import React from "react";
import TitleSmallBg from "./TitleSmallBg";
const ProgramHeadingDescription = ({ id, parentClass, span, heading, paragraph, external, link }) => {
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
        {external ? (
          <a href={link} target="__blank">
            Read More &#x25B6;
          </a>
        ) : (
          <Link href={`/programs/${id}`} passHref>
            <a>Read More &#x25B6;</a>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProgramHeadingDescription;
