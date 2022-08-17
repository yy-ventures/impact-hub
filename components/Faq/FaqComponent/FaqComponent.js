import React, { useState } from "react";
import FaqIcon from "./FaqIcon";

const FaqComponent = ({
  question,
  answer,
  zIndex,
  jobDetail,
  eduReq,
  qualifications,
  otherInfo,
  commonDesc,
  onClick,
  open,
}) => {
  const [visible, setVisible] = useState(false);
  // Toggle when clicked
  const toggle = () => {
    setVisible(!visible);
  };

  // console.log(onClick);

  return (
    <div
      className={`faq-component ${visible ? "show" : open === true ? "show" : ""} ${
        jobDetail ? "job-detail-component" : ""
      }`}
      onClick={onClick ? onClick : toggle}
    >
      <h4 style={{ zIndex: zIndex }}>
        {question}
        <FaqIcon className={visible ? "rotate" : open === true ? "rotate" : ""} />
      </h4>

      <div
        className={`faq-component_answer ${jobDetail ? "job-detail-component_answer" : ""}`}
        style={{ zIndex: zIndex - 1 }}
      >
        <p dangerouslySetInnerHTML={{ __html: answer }}></p>
        {jobDetail && (
          <>
            <ul>
              {eduReq?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
            <ul>
              {qualifications?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
            <ul>
              {otherInfo?.map(({ category, info }, index) => (
                <li key={index}>
                  <strong>{category}:</strong> {info}
                </li>
              ))}
            </ul>
            {commonDesc && commonDesc}
          </>
        )}
      </div>
    </div>
  );
};

export default FaqComponent;
