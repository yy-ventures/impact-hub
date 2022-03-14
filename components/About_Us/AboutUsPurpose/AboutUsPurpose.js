import React from "react";
import BackgroundOverlay from "../../Shared/BackgroundOverlay/BackgroundOverlay";
import Button from "../../Shared/Button/Button";
import AboutUsDescription from "../AboutUsDescription/AboutUsDescription";
import { purpose } from "./description";

const AboutUsPurpose = () => {
  return (
    <section className="about_us_purpose">
      <BackgroundOverlay className={"about_us_purpose_bg_overlay"} />
      <div className="about_us_purpose_container">
        <div className="about_us_purpose_container_detail">
          <AboutUsDescription
            parentClass={"about_us_purpose_container_detail"}
            heading={purpose.heading}
          />
          <div className="about_us_purpose_container_detail_highlight">
            <p>{purpose.highlight}</p>
          </div>

          <AboutUsDescription
            parentClass={"about_us_purpose_container_detail"}
            content={purpose.content}
          />
        </div>
        <div className="about_us_purpose_container_btn_grid">
          <Button text={"We Inspire"} />
          <Button text={"We Connect"} />
          <Button text={"We Enable"} />
          <Button text={"We Inspire"} />
          <Button text={"We Connect"} />
          <Button text={"We Enable"} />
          <Button text={"We Inspire"} />
          <Button text={"We Connect"} />
          <Button text={"We Enable"} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPurpose;
