import React from "react";
import commonShape from "../../public/common_path.png";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";
import HeadingDescription from "../Shared/HeadingDescription/HeadingDescription";
import FaqComponent from "../Shared/FaqComponent/FaqComponent";

const Faq = () => {
  return (
    <section className="faq_container">
      <div className="faq_container_content">
        <div className="faq_container_content_left">
          <HeadingDescription
            parentClass="faq_container_content_left"
            heading="Starting your journey:"
            span="Questions you may come across before"
          />
          <div className="faq_container_content_left_details">
            <HeadingDescription
              parentClass="faq_container_content_left_details"
              paragraph="Impact Hub Dhaka founders bring in more than 35 years experience of building social businesses, technology companies and social impact projects in Bangladesh.,"
              highlight="We’re looking for community managers, business developers and community hosts to join our
          growing team! Get in touch at dhaka@impacthub.net."
            />
          </div>
        </div>
        <div className="faq_container_content_right">
          <TitleBlock
            parentClass="faq_container_content_right"
            title="Come create with us!"
            shape={commonShape.src}
          />
        </div>
      </div>
      <FaqComponent />
      <FaqComponent />
      <div className="faq_container_faq"></div>
    </section>
  );
};

export default Faq;
