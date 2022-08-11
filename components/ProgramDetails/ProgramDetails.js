import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getSummary } from "./getSummary";
// IMAGES

// LAYOUT
import ProgramsSvg from "./layout/ProgramsSvg";

export default function ProgramDetails({ image, title, sum, html, slug }) {
  const baseUrlForImages = process.env.baseUrlForImages;
  // To get the summary out of the innerHtml
  const [summary, setSummary] = useState("");
  // Extract the summary from the innerHtml
  useEffect(() => {
    // selects all the paragraph tags from the innerHtml
    const paragraphs = document.getElementsByTagName("p");
    // get the summary of the 3rd paragraph of the innerHtml with a character length of 200
    const summarizedString = getSummary(paragraphs[3], 200);
    setSummary(summarizedString);
  }, []);

  return (
    <div className="story-details">
      <div className="top-layout">
        <ProgramsSvg />
      </div>
      <div className="bottom-layout">
        <ProgramsSvg />
      </div>
      <div className="box">
        <div className="container-1">
          <div className="img-container">
            <img className="image" src={baseUrlForImages + image} alt="image" />
          </div>
          <div className="content-container">
            <h1 className="content-container__heading">{title}</h1>
            <p className="content-container__text body-global">{sum ? sum : summary}...</p>
          </div>
        </div>
        <div className="story-container" dangerouslySetInnerHTML={{ __html: html }}></div>
        <div className="box_back">
          <Link href={`/${slug}`}>back</Link>
        </div>
      </div>
    </div>
  );
}
