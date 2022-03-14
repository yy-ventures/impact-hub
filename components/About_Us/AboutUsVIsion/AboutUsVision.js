import React from "react";
import AboutUsDescription from "../AboutUsDescription/AboutUsDescription";
import { vision, mission } from "./description";
import visionImage from "../../../public/images/about-us/about.png";
const AboutUsVision = () => {
  console.log(visionImage);
  return (
    <section className="about_us">
      <div className="about_us_container">
        <div className="about_us_container_vision_detail">
          <AboutUsDescription
            parentClass={"about_us_container_vision_detail"}
            heading={vision.heading}
            content={vision.content}
          />
        </div>
        <div className="about_us_container_mission">
          <img src={visionImage.src} alt="vision-image" />
          <div className="about_us_container_mission_detail">
            <AboutUsDescription
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
