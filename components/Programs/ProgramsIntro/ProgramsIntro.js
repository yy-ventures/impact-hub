import React from "react";
import programImageOne from "../../../public/images/img1.jpg";
import programImageTwo from "../../../public/images/img2.jpg";
import partnerShape from "../../../public/partners_path.png";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";
import TitleBlock from "../../Shared/TitleBlock/TitleBlock";
import ProgramHeadingDescription from "../ProgramHeadingDescription/ProgramHeadingDescription";
import ProgramsIntroBg from "./ProgramsIntroBg";
import useFetch from "../../Hooks/useFetch";
// import programs from "../data/programs.json";

const ProgramsIntro = () => {
  const programs = useFetch("/get-programs");
  const baseUrlForImages = process.env.baseUrlForImages;
  return (
    <section className="intro">
      <div className="intro_bg">
        <ProgramsIntroBg />
      </div>
      <div className="intro_header">
        <div>
          <HeadingDescription
            parentClass="intro_header"
            span=""
            heading="Projects"
          />
          <p>
            We connect entrepreneurs and innovators to large organizations,
            cultural and public institutions. Why? To enable inclusive and
            sustainable innovation at scale. At Impact Hub, we make
            collaboration happen.
          </p>
        </div>
        <TitleBlock
          title="Inclusive and sustainable innovation at scale"
          parentClass="membership_container_header"
          shape={partnerShape.src}
        />
      </div>
      <div className="intro_body_container">
        {/* Dummy start */}
        <HeadingDescription
          parentClass="intro"
          span="Ongoing projects"
          heading=" "
        />
        {/* Dummy end */}
        {programs.map(
          (
            {
              id,
              title,
              short_description,
              thumb_image,
              is_external_link,
              link,
            },
            index
          ) => {
            return (
              <div
                key={id}
                className={`intro_body_container_body ${
                  index % 2 === 1 ? "intro_body_container_body_reverse" : ""
                }`}
              >
                <div className="intro_body_container_body_program_image">
                  <img src={baseUrlForImages + thumb_image} alt="" />
                </div>
                <div className="intro_body_container_body_program_header">
                  <ProgramHeadingDescription
                    id={id}
                    parentClass="intro_body_container_body_program_header"
                    span=""
                    heading={title}
                    paragraph={short_description}
                    external={is_external_link}
                    link={link}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="intro_body_container">
        {/* Dummy start */}
        <HeadingDescription
          parentClass="intro"
          span="Past projects"
          heading=" "
        />
        {/* Dummy end */}
        {programs.map(
          (
            {
              id,
              title,
              short_description,
              thumb_image,
              is_external_link,
              link,
            },
            index
          ) => {
            return (
              <div
                key={id}
                className={`intro_body_container_body ${
                  index % 2 === 1 ? "intro_body_container_body_reverse" : ""
                }`}
              >
                <div className="intro_body_container_body_program_image">
                  <img src={baseUrlForImages + thumb_image} alt="" />
                </div>
                <div className="intro_body_container_body_program_header">
                  <ProgramHeadingDescription
                    id={id}
                    parentClass="intro_body_container_body_program_header"
                    span=""
                    heading={title}
                    paragraph={short_description}
                    external={is_external_link}
                    link={link}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default ProgramsIntro;
