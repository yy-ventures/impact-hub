import React from "react";
import partnerShape from "../../public/partners_path.png";
import partnerBg from "../../public/partners_bg.png";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";

const Partners = () => {
  return (
    <section className="partners_container">
      <img className="partners_container_bg" src={partnerBg.src} />
      <div className="partners_container_content">
        <TitleBlock
          title="Excited to create impact together?"
          shape={partnerShape.src}
          parentClass="partners_container_content"
        />
        <div className="partners_container_content_right">
          <p className="body-global">
            Impact Hub is a global network (100+ locations) of collaborators focused on prototyping
            the future of business and society. We believe a better world evolves through the
            combined accomplishments of creative, committed, and compassionate individuals focused
            on a common purpose.
          </p>
          <p className="body-global">
            We look forward to hearing about your ideas for partnerships. Write to us at at{" "}
            <span className="bold">lamia.hafiz@impacthub.net</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
