import React from "react";
import partnerShape from "../../public/partners_path.png";
import MembershipCard from "../Shared/MembershipCard/MembershipCard";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";
import { plans } from "./contents";

const Membership = () => {
  return (
    <section className="membership_container">
      <div className="membership_container_header">
        <div className="membership_container_header_content">
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
          parentClass="membership_container_header"
          shape={partnerShape.src}
        />
      </div>
      <div className="membership_container_grid_cards">
        {plans.map((data, index) => {
          return (
            index % 2 == 0 && (
              <div className={`membership_container_grid_cards_flex`}>
                <MembershipCard
                  key={index}
                  title={plans[index].title}
                  price={plans[index].price}
                  duration={plans[index].duration}
                  details={plans[index].details}
                  modifierClass={`flex-card-${index + 1}`}
                />
                <MembershipCard
                  key={index + 1}
                  title={plans[index + 1].title}
                  price={plans[index + 1].price}
                  duration={plans[index + 1].duration}
                  details={plans[index + 1].details}
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

export default Membership;
