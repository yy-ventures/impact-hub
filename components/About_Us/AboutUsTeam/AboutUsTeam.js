import React from "react";
import useFetch from "../../Hooks/useFetch";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";
import AboutUsImageGrid from "./AboutUsImageGrid/AboutUsImageGrid";
import { team, images } from "./contents";
const AboutUsTeam = () => {
  const teamMembers = useFetch("/get-team-members");
  console.log(teamMembers);
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
          {teamMembers.length > 0 && (
            <AboutUsImageGrid parentClass={"about_us_team_container_image-grid"} members={teamMembers} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeam;
