import React, { useState, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import MembershipCard from "../../Shared/MembershipCard/MembershipCard";
const MembershipContent = ({ parentClass }) => {
  //State to hold Membership Data
  const membershipPlans = useFetch("/get-packages/1");
  const [jump, setJump] = useState(3);
  const [multiplier, setMultiplier] = useState(1);

  // State value to hold the value of the current screen size
  // Set the screen-width to window's inner width if we are on the client side
  // In SSR we do not have a window on the server side,so we need to check if we are on the client side
  // as we set the screen width to window.innerWidth by putting a condition (typeof window !== 'undefined')
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" && window.innerWidth);

  // keep the cards open on mobile screens
  const changeOrder = (screenWidth) => {
    // for mobile screens less than 700px width
    if (screenWidth <= 800 && screenWidth !== null) {
      setJump(1);
      setMultiplier(2);
    } else {
      setJump(3);
      setMultiplier(1);
    }
  };

  // Get screen size
  useEffect(() => {
    // Set the screen size to screen width state on change
    const onWidthChange = () => {
      setScreenWidth(window.innerWidth);
    };
    changeOrder(screenWidth);
    // Add event listener to listen to screen width changes
    window.addEventListener("resize", onWidthChange);
    return () => window.removeEventListener("resize", onWidthChange); // removes the event listener
  }, [screenWidth]);

  return membershipPlans.map((data, index) => {
    return (
      index < 3 && (
        <div key={index} className={`${parentClass}_flex`}>
          <MembershipCard
            id={membershipPlans[index * multiplier].id}
            title={membershipPlans[index * multiplier].name}
            price={membershipPlans[index * multiplier].price}
            details={membershipPlans[index * multiplier].get_package_features}
            modifierClass={`flex-card-${index * 2 + 1}`}
          />
          {index + 3 < membershipPlans.length && (
            <MembershipCard
              id={membershipPlans[index * multiplier + jump].id}
              title={membershipPlans[index * multiplier + jump].name}
              price={membershipPlans[index * multiplier + jump].price}
              details={membershipPlans[index * multiplier + jump].get_package_features}
              modifierClass={`flex-card-${index * 2 + 2}`}
            />
          )}
        </div>
      )
    );
  });
};

export default MembershipContent;
