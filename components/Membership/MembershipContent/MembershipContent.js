import React, { useState, useEffect } from "react";

import MembershipCard from "../../Shared/MembershipCard/MembershipCard";
const MembershipContent = ({ parentClass }) => {
  //State to hold Membership Data
  const [membershipPlans, setMembershipPlans] = useState([]);
  //   Fetching Membership data from the api
  const fetchMembershipData = async () => {
    await fetch("https://ihd.yyventures.org/api/get-packages/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setMembershipPlans(data.data));
  };
  // Fetch data
  useEffect(() => {
    fetchMembershipData();
  }, []);
  //  Data Rendering
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
