import React from "react";
import banner from "../../../public/images/about-us/approach_banner.png";
import CardDetail from "./CardDetail/CardDetail";
import { cardDetails } from "./contents";
import BannerSvg from "./BannerSvg/BannerSvg";
const AboutUsApproach = () => {
  return (
    <section className="about_us_approach">
      <div className="about_us_approach_container">
        <div className="about_us_approach_container_inner">
          <div className="about_us_approach_container_inner_heading">
            <h2>Approach</h2>
          </div>
          <div className="about_us_approach_container_inner_body">
            <p>
              Embedded in Design Thinking, we foster collaboration, unlock creativity and create innovative solutions:
            </p>
            <p>
              <strong>Inspire:</strong> challenging the status quo is possible – we do it every day.
            </p>
            <p>
              <strong>Connect:</strong> accessing a professional ecosystem of change makers and curating interaction
              across silos.
            </p>
            <p>
              <strong>Enable:</strong>
              we disrupt mindsets, share expertise and the necessary tools to create a better future for all.
            </p>
          </div>
          <div className="about_us_approach_container_inner_banner">
            <div className="about_us_approach_container_inner_banner_svg">
              <BannerSvg type="empathize" />
              <p>Empathize</p>
            </div>
            <div className="about_us_approach_container_inner_banner_svg">
              <BannerSvg type="define" />
              <p>Define</p>
            </div>
            <div className="about_us_approach_container_inner_banner_svg">
              <BannerSvg type="ideate" />
              <p>Ideate</p>
            </div>
            <div className="about_us_approach_container_inner_banner_svg">
              <BannerSvg type="prototype" />
              <p>Prototype</p>
            </div>
            <div className="about_us_approach_container_inner_banner_svg">
              <BannerSvg type="test" />
              <p>Test</p>
            </div>
          </div>
        </div>
        <div className="about_us_approach_container_grid">
          {cardDetails.map(({ heading, paragraph }, index) => {
            return (
              <CardDetail
                parentClass={"about_us_approach_container_grid"}
                heading={heading}
                details={paragraph}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUsApproach;
