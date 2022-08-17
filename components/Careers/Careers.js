import React from "react";
import commonShape from "../../public/common_path.png";
import FaqComponent from "../Faq/FaqComponent/FaqComponent";
import HeadingDescription from "../Shared/HeadingDescription/HeadingDescription";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";
import jobDetail from "./jobDetails/jobDetails.json";
import JobPosts from "./JobPosts/JobPosts";

const Careers = () => {
  return (
    <section className="careers_container">
      <div className="careers_container_content">
        <div className="careers_container_content_left">
          <p className="body-global">
            Impact Hub Dhaka founders bring in more than 35 years experience of building social businesses, technology
            companies and social impact projects in Bangladesh.
          </p>
          <p className="body-global">
            {/* We’re looking for community managers, business developers and community hosts to join our growing team! Get
            in touch at dhaka@impacthub.net. */}
            To join our growing team, get in touch through dhaka@impacthub.net!
          </p>
        </div>
        <TitleBlock
          parentClass="careers_container_content"
          title="Excited to create impact together?"
          shape={commonShape.src}
        />
      </div>
      <div className="careers_container_job">
        {/* Operation Associate Job Post Start */}
        {jobDetail.map(
          ({ title, span, job_description, educational_requirements, qualifications, other_info }, index) => {
            return (
              <JobPosts
                key={index}
                title={title}
                span={span}
                jobDescription={job_description}
                education={educational_requirements}
                qualifications={qualifications}
                otherInfo={other_info}
              />
            );
          }
        )}
        {/* Operation Associate Job Post End */}
      </div>
    </section>
  );
};

export default Careers;
