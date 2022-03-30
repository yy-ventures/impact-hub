import React from "react";
import commonShape from "../../public/common_path.png";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";

const Careers = () => {
  return (
    <section className="careers_container">
      <div className="careers_container_content">
        <div className="careers_container_content_left">
          <p className="body-global">
            Impact Hub Dhaka founders bring in more than 35 years experience of building social businesses, technology
            companies and social impact projects in Bangladesh.
          </p>
          <p className="body-global">
            We’re looking for community managers, business developers and community hosts to join our growing team! Get
            in touch at dhaka@impacthub.net.
          </p>
        </div>
        <TitleBlock
          parentClass="careers_container_content"
          title="Excited to create impact together?"
          shape={commonShape.src}
        />
      </div>
    </section>
  );
};

export default Careers;
