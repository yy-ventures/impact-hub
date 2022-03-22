import React, { useState, useEffect } from "react";
import FaqComponent from "../FaqComponent/FaqComponent";
import { faqContents } from "../faqContent";
const FaqContent = ({ parentClass }) => {
  let initialIndex = 200; // Sets the z index of each faq children
  const [faqContent, setFaqContent] = useState({}); // state value to hold the data of faq contents from the api
  //   const [token, setToken] = useState({});
  //   const authorization = "Authorization";
  const fetchFaq = () => {
    fetch("https://ihd.yyventures.org/api/get-faq", {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    })
      .then((res) => {
        res.json();
        console.log(window.localStorage.getItem("token"));
        console.log(res);
      })
      .then((data) => console.log(data));
  };

  //   useEffect(() => {
  //     fetchFaq();
  //   }, []);

  return faqContents.map(({ heading, faq }, index) => {
    return (
      <div key={index} className={parentClass + "_faqs"}>
        <h2>{heading}</h2>
        {faq.map(({ question, answer }, index) => {
          initialIndex = initialIndex - 2;
          return (
            <FaqComponent key={index} question={question} answer={answer} zIndex={initialIndex} />
          );
        })}
      </div>
    );
  });
};

export default FaqContent;
