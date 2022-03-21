import React from "react";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";
import AboutUsImageGrid from "./AboutUsImageGrid/AboutUsImageGrid";
import { team, images } from "./contents";
const AboutUsTeam = () => {
  return (
    <section className="about_us_team">
      <div className="about_us_team_container">
        <div className="about_us_team_container_description">
          <HeadingDescription
            parentClass={"about_us_team_container_description"}
            span={team.span}
            heading={team.heading}
            content={team.content}
          />
        </div>
        <div className="about_us_team_container_image-grid">
          <AboutUsImageGrid parentClass={"about_us_team_container_image-grid"} images={images} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeam;
