import React from "react";
import useFetch from "../../Hooks/useFetch";
import MembershipCard from "../../Shared/MembershipCard/MembershipCard";
const MembershipContent = ({ parentClass }) => {
  //State to hold Membership Data
  const membershipPlans = useFetch("/get-packages/1");
  return membershipPlans.map((data, index) => {
    return (
      index % 2 == 0 && (
        <div key={index} className={`${parentClass}_flex`}>
          <MembershipCard
            title={membershipPlans[index].name}
            price={membershipPlans[index].price}
            details={membershipPlans[index].get_package_features}
            modifierClass={`flex-card-${index + 1}`}
          />
          <MembershipCard
            title={membershipPlans[index + 1].name}
            price={membershipPlans[index + 1].price}
            details={membershipPlans[index + 1].get_package_features}
            modifierClass={`flex-card-${index + 2}`}
          />
        </div>
      )
    );
  });
};

export default MembershipContent;
