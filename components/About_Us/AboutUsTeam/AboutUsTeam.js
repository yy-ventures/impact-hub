import React from "react";
import AboutUsDescription from "../AboutUsDescription/AboutUsDescription";
import { team } from "./description";
const AboutUsTeam = () => {
  return (
    <section className="about_us_team">
      <div className="about_us_team_container">
        <AboutUsDescription
          parentClass={"about_us_team_container"}
          heading={team.heading}
          content={team.content}
        />
      </div>
    </section>
  );
};

export default AboutUsTeam;
