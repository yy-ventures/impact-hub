import React from "react";
import programImageOne from "../../../public/images/img1.jpg";
import programImageTwo from "../../../public/images/img2.jpg";
import partnerShape from "../../../public/partners_path.png";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";
import TitleBlock from "../../Shared/TitleBlock/TitleBlock";
import ProgramHeadingDescription from "../ProgramHeadingDescription/ProgramHeadingDescription";
import ProgramsIntroBg from "./ProgramsIntroBg";
import programs from "../data/programs.json";

const ProgramsIntro = () => {
  return (
    <section className="intro">
      <div className="intro_bg">
        <ProgramsIntroBg />
      </div>
      <div className="intro_header">
        <div>
          <HeadingDescription parentClass="intro_header" span="" heading="Programs" />
          <p>
            Impact Hub Dhaka is part of a global network of over 100 connected communities that enable collaboration. We
            unite people from every profession, background and culture with imagination and drive to challenge the
            status quo. We see and do things differently – together we create the new normal.
          </p>
        </div>
        <TitleBlock title="Come create with us!" parentClass="membership_container_header" shape={partnerShape.src} />
      </div>
      <div className="intro_body_container">
        {programs.map(({ title, description, image, link }, index) => {
          return (
            <div
              key={index}
              className={`intro_body_container_body ${index % 2 === 1 ? "intro_body_container_body_reverse" : ""}`}
            >
              <div className="intro_body_container_body_program_image">
                <img src={image} alt="" />
              </div>
              <div className="intro_body_container_body_program_header">
                <ProgramHeadingDescription
                  parentClass="intro_body_container_body_program_header"
                  span=""
                  heading={title}
                  paragraph={description}
                  link={link}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgramsIntro;
