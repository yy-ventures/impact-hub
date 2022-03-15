import React from "react";
import { vision, mission } from "./description";
import visionImage from "../../../public/images/about-us/about.png";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";
const AboutUsVision = () => {
  return (
    <section className="about_us">
      <div className="about_us_container">
        <HeadingDescription parentClass={"about_us_container_vision"} heading={vision.heading} />
        <div className="about_us_container_vision_detail">
          <HeadingDescription
            parentClass={"about_us_container_vision_detail"}
            content={vision.content}
          />
          <img src={visionImage.src} alt="vision-image" />
        </div>

        <div className="about_us_container_mission">
          <div className="about_us_container_mission_detail">
            <HeadingDescription
              parentClass={"about_us_container_mission_detail"}
              heading={mission.heading}
              content={mission.content}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsVision;
