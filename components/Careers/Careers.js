import React from "react";
import commonShape from "../../public/common_path.png";
import FaqComponent from "../Faq/FaqComponent/FaqComponent";
import HeadingDescription from "../Shared/HeadingDescription/HeadingDescription";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";

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
            We’re looking for community managers, business developers and community hosts to join our growing team! Get
            in touch at dhaka@impacthub.net.
          </p>
        </div>
        <TitleBlock
          parentClass="careers_container_content"
          title="Excited to create impact together?"
          shape={commonShape.src}
        />
      </div>
      <div className="careers_container_job">
        <div className="careers_container_job_title">
          <HeadingDescription parentClass="careers_container_job_title" heading="Programs" span="Senior Manager," />
        </div>
        <div className="careers_container_job_description">
          <FaqComponent
            question="Job Description"
            answer="You will be leading all operations at Impact Hub Dhaka with an aim to improve the company’s overall efficiency and effectiveness while bringing together entrepreneurs, enablers, and leaders from all across Bangladesh to create a vibrant community of social innovation enthusiasts. You will support daily management of Impact Hub Dhaka where we offer inspiring workspaces, community-led events, diverse network, entrepreneurship programs and consulting services to bring sustainable solutions that create impact and drive change."
            zIndex={4}
            jobDetail
          />
          <FaqComponent question="Essential Responsibilities" answer="none" zIndex={2} jobDetail />
          <FaqComponent question="Qualifications" answer="none" zIndex={2} jobDetail />
          <FaqComponent question="Other Info" answer="none" zIndex={2} jobDetail />
        </div>
      </div>
    </section>
  );
};

export default Careers;
