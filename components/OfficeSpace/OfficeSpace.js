import React from "react";
import partnerShape from "../../public/partners_path.png";
import MembershipCard from "../Shared/MembershipCard/MembershipCard";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";
import { spaces } from "./contents";
import OfficeSpaceBg from "./OfficeSpaceBg";
const OfficeSpace = () => {
  return (
    <section className="officespace_container">
      <div className="officespace_container_bg">
        <OfficeSpaceBg />
      </div>
      <div className="officespace_container_header">
        <div className="officespace_container_header_content">
          <div>
            <h4>The world is changing.</h4>
            <h5>We are on the transitioning team.</h5>
          </div>
          <div>
            <p>
              Impact Hub Dhaka is part of a global network of over 100 connected communities that
              enable collaboration. We unite people from every profession, background and culture
              with imagination and drive to challenge the status quo. We see and do things
              differently – together we create the new normal.
            </p>
          </div>
        </div>
        <TitleBlock
          title="Come create with us!"
          parentClass="officespace_container_header"
          shape={partnerShape.src}
        />
      </div>
      <div className="officespace_container_grid_cards">
        {spaces.map(({ title, price, duration, details }, index) => {
          return (
            index % 2 == 0 && (
              <div key={index} className="officespace_container_grid_cards_flex">
                <MembershipCard
                  title={spaces[index].title}
                  price={spaces[index].price}
                  duration={spaces[index].duration}
                  details={spaces[index].details}
                  modifierClass={`flex-card-${index + 1}`}
                />
                <MembershipCard
                  title={spaces[index + 1].title}
                  price={spaces[index + 1].price}
                  duration={spaces[index + 1].duration}
                  details={spaces[index + 1].details}
                  modifierClass={`flex-card-${index + 2}`}
                />
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default OfficeSpace;
