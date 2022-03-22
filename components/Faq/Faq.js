import React from "react";
import commonShape from "../../public/common_path.png";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";
import HeadingDescription from "../Shared/HeadingDescription/HeadingDescription";
import FaqComponent from "../Shared/FaqComponent/FaqComponent";
import { faqContents } from "./faqContent";
const Faq = () => {
  let initialIndex = 200;
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

      {faqContents.map(({ heading, faq }, index, outerArr) => {
        return (
          <div key={index} className="faq_container_faqs">
            <h2>{heading}</h2>
            {faq.map(({ question, answer }, index, innerArr) => {
              initialIndex = initialIndex - 2;
              return (
                <FaqComponent
                  key={index}
                  question={question}
                  answer={answer}
                  zIndex={initialIndex}
                />
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Faq;
