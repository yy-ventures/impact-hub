import React, { useState } from "react";
import FaqComponent from "../../Faq/FaqComponent/FaqComponent";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";

const JobPosts = ({ title, span, jobDescription, education, qualifications, otherInfo }) => {
  const [toggle, setToggle] = useState([false, false, false, false]);
  const handleAccordion = (i) => {
    setToggle((prev) => {
      let temp = [false, false, false, false];
      prev[i - 1] === true ? (temp[i - 1] = false) : (temp[i - 1] = true);
      return temp;
    });
  };

  return (
    <>
      <div className="job_post__title">
        <HeadingDescription parentClass="job_post__title" heading={title} span={span} />
      </div>
      <div className="job_post__description">
        <FaqComponent
          question="Job Description"
          answer={jobDescription}
          open={toggle[0]}
          zIndex={2}
          jobDetail
          onClick={() => handleAccordion(1)}
        />

        <FaqComponent
          question="Essential Responsibilities"
          eduReq={education}
          open={toggle[1]}
          zIndex={2}
          jobDetail
          onClick={() => handleAccordion(2)}
        />

        <FaqComponent
          question="Qualifications"
          qualifications={qualifications}
          open={toggle[2]}
          zIndex={2}
          jobDetail
          onClick={() => handleAccordion(3)}
        />
        <FaqComponent
          question="Other Info"
          otherInfo={otherInfo}
          zIndex={2}
          open={toggle[3]}
          jobDetail
          onClick={() => handleAccordion(4)}
        />
        <div className="job_post__description__common-info">
          <p>
            We welcome candidates from diverse backgrounds. If you are interested in applying for this position, please
            send your resume and cover letter to <a href="mailto:dhaka@impacthub.net">dhaka@impacthub.net</a>. Please
            indicate the position applied for in the subject line of your email. Your cover letter should be no longer
            than one page, and must answer the following questions.
          </p>
          <ul>
            <li>Why are you interested in working with Impact Hub Dhaka?</li>
            <li>What compelled you to apply for this specific role at Impact Hub Dhaka?</li>
            <li>What strengths, experience, and expertise would you bring to this role?</li>
          </ul>
          <p>
            You are advised to mention your salary expectations in your cover letter. Applications without cover letters
            will not be reviewed. Only short-listed candidates will be contacted for interviews.
          </p>
        </div>
      </div>
    </>
  );
};

export default JobPosts;
