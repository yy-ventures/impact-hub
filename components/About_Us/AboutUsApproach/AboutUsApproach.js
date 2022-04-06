import React from "react";
import banner from "../../../public/images/about-us/approach_banner.png";
import CardDetail from "./CardDetail/CardDetail";
import { cardDetails } from "./contents";
import BannerSvg from "./BannerSvg/BannerSvg";
const AboutUsApproach = () => {
  return (
    <section className="about_us_approach">
      <div className="about_us_approach_container_inner">
        <div className="about_us_approach_container_inner_heading">
          <h2>Approach</h2>
        </div>
        <div className="about_us_approach_container_inner_body">
          <p className="body-global">
            Embedded in Design Thinking, we foster collaboration, unlock creativity and create innovative solutions:
          </p>
          <p className="body-global">
            <strong>Inspire:</strong> challenging the status quo is possible – we do it every day.
          </p>
          <p className="body-global">
            <strong>Connect:</strong> accessing a professional ecosystem of change makers and curating interaction
            across silos.
          </p>
          <p className="body-global">
            <strong>Enable:</strong>
            we disrupt mindsets, share expertise and the necessary tools to create a better future for all.
          </p>
        </div>
        <div className="about_us_approach_container_inner_banner">
          <div className="about_us_approach_container_inner_banner_svg">
            <BannerSvg type="empathize" />
            <p className="body-global">Empathize</p>
          </div>
          <div className="about_us_approach_container_inner_banner_svg">
            <BannerSvg type="define" />
            <p className="body-global">Define</p>
          </div>
          <div className="about_us_approach_container_inner_banner_svg">
            <BannerSvg type="ideate" />
            <p className="body-global">Ideate</p>
          </div>
          <div className="about_us_approach_container_inner_banner_svg">
            <BannerSvg type="prototype" />
            <p className="body-global">Prototype</p>
          </div>
          <div className="about_us_approach_container_inner_banner_svg">
            <BannerSvg type="test" />
            <p className="body-global">Test</p>
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
    </section>
  );
};

export default AboutUsApproach;
