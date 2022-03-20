import React, { useState } from "react";
import partnerShape from "../../public/partners_path.png";
import MembershipCard from "../Shared/MembershipCard/MembershipCard";
import TitleBlock from "../Shared/TitleBlock/TitleBlock";
import { plans } from "./contents";
import MembershipModal from "./MembershipModal/MembershipModal";
const Membership = () => {

  const [showForm, setShowForm] = useState(false)
  const handleCloseModal = e => {
    if (e.target.className === "membership_modal" && e.target.className !== "membership_modal_container") {
      setShowForm(false)
    }
  }

  const handleChild = () => {
    setShowForm(true)
  }

  return (
    <section className="membership_container" onClick={handleCloseModal}>
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
        {plans.map(({ title, price, duration, details }, index) => {
          return (
            <MembershipCard
              key={index}
              title={title}
              price={price}
              duration={duration}
              details={details}
              onChildClick={handleChild}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          );
        })}
      </div>
      {showForm && <MembershipModal/>}
    </section>
  );
};

export default Membership;
