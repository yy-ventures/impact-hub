import React from "react";
import HomeImpactCounter from "./HomeImpactCounter/HomeImpactCounter";
import counterData from "../../../static/Data/counter.json";
import useFetch from "../../Hooks/useFetch";
import PreLoader from "../../Shared/PreLoader/PreLoader";

// LAYOUT
import layout1 from "../../../public/images/home/impact-layout.svg";

const HomeImpacts = () => {
  const counterData = useFetch("/get-global-networks");
  console.log(counterData);

  return (
    <section className="home_impacts">
      <div className="home_impacts_layout">
        <img src={layout1.src} />
      </div>
      <div className="home_impacts_header">
        <h4>Want to Know</h4>
        <h2>
          what <span className="marked">impact</span> looks like?
        </h2>
      </div>
      <div className="home_impacts_body">
        <h4 className="marked">Lets break it down!</h4>
        <div className="home_impacts_body_counter">
          {!counterData && <PreLoader />}
          {counterData.map((counter, index) => (
            <HomeImpactCounter counter={counter} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeImpacts;
