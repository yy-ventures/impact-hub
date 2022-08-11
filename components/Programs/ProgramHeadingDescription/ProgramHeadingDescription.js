import Link from "next/link";
import React from "react";
import TitleSmallBg from "./TitleSmallBg";
const ProgramHeadingDescription = ({ parentClass, span, heading, paragraph }) => {
  return (
    <>
      {heading && (
        <div className={parentClass + "_heading heading-global"}>
          <div className="title_small_bg">
              <TitleSmallBg />
          </div>
          <h6>
            <span>{span && span}</span>
            {heading}
          </h6>
        </div>
      )}
      
      {paragraph && <p className={parentClass + "_body body-global"}>{paragraph}</p>}  
      <div className="program_footer">
        <Link href={`#`}>
          <a>Read More &#x25B6;</a>
        </Link>
      </div>    
    </>
  );
};

export default ProgramHeadingDescription;
