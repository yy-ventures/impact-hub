import React from "react";
import useFetch from "../../Hooks/useFetch";
import FaqComponent from "../FaqComponent/FaqComponent";
const FaqContent = () => {
  // Sets the z index of each faq children
  let initialIndex = 200;
  // state value to hold the data of faq contents from the api
  const faqContent = useFetch("/get-faq");
  // filter the faq contents and remove all the blank elements
  const filteredFaqContents = faqContent.filter(({ get_faq }) => get_faq.length > 0);

  return filteredFaqContents.map(({ id, type, get_faq }) => {
    return (
      <React.Fragment key={id}>
        <h2 key={id}>{type}</h2>
        {get_faq.map(({ id, question, answer }) => {
          initialIndex = initialIndex - 2;
          return (
            <FaqComponent key={id} question={question} answer={answer} zIndex={initialIndex} />
          );
        })}
      </React.Fragment>
    );
  });
};

export default FaqContent;
