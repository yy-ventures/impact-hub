import React from "react";
import commonShape from "../../public/common_path.png";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";
import HeadingDescription from "../Shared/HeadingDescription/HeadingDescription";

const Faq = () => {
  return (
    <section className="faq_container">
      <div className="faq_container_content">
        <HeadingDescription
          heading="Starting your journey:"
          span="Questions you may come across before"
        />
        <p>
          Impact Hub Dhaka founders bring in more than 35 years experience of building social
          businesses, technology companies and social impact projects in Bangladesh.
        </p>
        <p>
          We’re looking for community managers, business developers and community hosts to join our
          growing team! Get in touch at dhaka@impacthub.net.
        </p>
        <div className="faq_container_content_right">
          <TitleBlock
            parentClass="faq_container_content_right"
            title="Come create with us!"
            shape={commonShape.src}
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
