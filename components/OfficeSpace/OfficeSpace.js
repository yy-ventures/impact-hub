import React from "react";
import partnerShape from "../../public/partners_path.png";
import MembershipCard from "../Shared/MembershipCard/MembershipCard";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";
import { spaces } from "./contents";
import OfficeSpaceBg from "./OfficeSpaceBg";
import useFetch from "../Hooks/useFetch";
const OfficeSpace = () => {
  //State to hold Membership Data
  const officeSpacePlans = useFetch("/get-packages/2");
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
            <p className="body-global">
              Impact Hub Dhaka is part of a global network of over 100 connected communities that enable collaboration.
              We unite people from every profession, background and culture with imagination and drive to challenge the
              status quo. We see and do things differently – together we create the new normal.
            </p>
          </div>
        </div>
        <TitleBlock title="Come create with us!" parentClass="officespace_container_header" shape={partnerShape.src} />
      </div>
      <div className="officespace_container_grid_cards">
        {officeSpacePlans.map(({ id, name, price, get_package_features }, index) => {
          return (
            <MembershipCard
              key={index}
              id={id}
              type={2}
              image={spaces[index].image}
              title={name}
              price={price}
              duration={8}
              details={get_package_features}
              modifierClass={`flex-card-${index + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OfficeSpace;
