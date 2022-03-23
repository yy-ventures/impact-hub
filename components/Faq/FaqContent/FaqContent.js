import React, { useState, useEffect } from "react";
import FaqComponent from "../FaqComponent/FaqComponent";
const FaqContent = ({ parentClass }) => {
  let initialIndex = 200; // Sets the z index of each faq children
  const [faqContent, setFaqContent] = useState([]); // state value to hold the data of faq contents from the api
  // Fetch Faq data from the api
  const fetchFaq = async () => {
    await fetch("https://ihd.yyventures.org/api/get-faq", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setFaqContent(data.data));
  };
  // Fetch data
  useEffect(() => {
    fetchFaq();
  }, []);
  // filter the faq contents and remove all the blank elements
  const filteredFaqContents = faqContent.filter(({ get_faq }) => get_faq.length > 0);

  return filteredFaqContents.map(({ id, type, get_faq }) => {
    return (
      <div key={id} className={parentClass + "_faqs"}>
        <h2>{type}</h2>
        {get_faq.map(({ id, question, answer }) => {
          initialIndex = initialIndex - 2;
          return (
            <FaqComponent key={id} question={question} answer={answer} zIndex={initialIndex} />
          );
        })}
      </div>
    );
  });
};

export default FaqContent;
