import React from "react";

const HomeImpactCounter = ({ counter, index }) => {
  const { count, title } = counter;
  const splitTitle = title.split(/(\s+)/);
  const title1 = splitTitle[0];
  const title2 = splitTitle[2];
  
  return (
    <div className="home_impacts_body_counter_card">
      <div className={`home_impacts_body_counter_card_${index + 1}`}>
        <div className={`home_impacts_body_counter_card_${index + 1}_layout-${index + 1}`}></div>
        <div>
          <h2>{count > 10000 ? Math.abs(count / 1000) + "K" : count}</h2>
        </div>
        <div className="text">
          <p>{title1}</p>
          <p>{title2}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeImpactCounter;
