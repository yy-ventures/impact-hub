import React from "react";
import AboutUsDescription from "../AboutUsDescription/AboutUsDescription";
import { purpose } from "./description";
const AboutUsPurpose = () => {
  return (
    <section className="about_us_purpose">
      <div className="about_us_purpose_container">
        <div className="about_us_purpose_container_detail">
          <AboutUsDescription
            parentClass={"about_us_purpose_container_detail"}
            heading={purpose.heading}
          />
          <p className="about_us_purpose_container_detail_highlight">{purpose.highlight}</p>
          <AboutUsDescription
            parentClass={"about_us_purpose_container_detail"}
            content={purpose.content}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPurpose;
