import React from "react";
import useFetch from "../../Hooks/useFetch";
import MembershipCard from "../../Shared/MembershipCard/MembershipCard";
const MembershipContent = ({ parentClass }) => {
  //State to hold Membership Data
  const membershipPlans = useFetch("/get-packages/1");
  return membershipPlans.map((data, index) => {
    return (
      index < 3 && (
        <div key={index} className={`${parentClass}_flex`}>
          <MembershipCard
            title={membershipPlans[index].name}
            price={membershipPlans[index].price}
            details={membershipPlans[index].get_package_features}
            modifierClass={`flex-card-${index * 2 + 1}`}
          />
          <MembershipCard
            title={membershipPlans[index + 3].name}
            price={membershipPlans[index + 3].price}
            details={membershipPlans[index + 3].get_package_features}
            modifierClass={`flex-card-${index * 2 + 2}`}
          />
        </div>
      )
    );
  });
};

export default MembershipContent;
