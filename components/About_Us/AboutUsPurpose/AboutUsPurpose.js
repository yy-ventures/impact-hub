import React, { useState, useEffect } from "react";
import BackgroundOverlay from "../../Shared/BackgroundOverlay/BackgroundOverlay";
import Button from "../../Shared/Button/Button";
import AboutUsDescription from "../AboutUsDescription/AboutUsDescription";
import { purpose } from "./description";
import { buttons } from "./buttons";

const AboutUsPurpose = () => {
  // on mouse over expand the height of the button div
  const [expand, setExpand] = useState(false);
  // On hover toggle the expand variable value
  // const onScroll = () => {
  //   // window.scrollY == 1984 ? setExpand("expand") : setExpand("");
  //   if (window.scrollY) {
  //     console.log(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <section className="about_us_purpose">
      <BackgroundOverlay className={"about_us_purpose_bg_overlay"} />
      <div className="about_us_purpose_container">
        <div className="about_us_purpose_container_detail">
          <div className="about_us_purpose_container_detail_block">
            <AboutUsDescription
              parentClass={"about_us_purpose_container_detail_block"}
              heading={purpose.heading}
            />
            <p className="about_us_purpose_container_detail_block_body">
              We mobilize vibrant community of entrepreneurs through
              <strong> inspiring space, meaningful content </strong> and
              <strong> diverse networks</strong> to accelerate sustainable socio-economic growth of
              Bangladesh.
            </p>
          </div>
          <div className="about_us_purpose_container_detail_highlight">
            <p>{purpose.highlight}</p>
          </div>
        </div>
        <div className="about_us_purpose_container_btn_grid">
          {buttons.map(({ title, span }, index) => {
            return index < 3 ? (
              <Button key={index} text={title} />
            ) : (
              <Button key={index} text={title} span={span} expand={expand} />
            );
          })}
          {/* <Button text={buttons[0].title} />
          <Button text={buttons[1].title} />
          <Button text={buttons[2].title} />
          <Button text={buttons[3].title} span={buttons[3].span} expand={expand === 1 && true} />
          <Button text={buttons[4].title} span={buttons[4].span} expand={expand === 2 && true} />
          <Button text={buttons[5].title} span={buttons[5].span} expand={expand === 3 && true} />
          <Button text={buttons[6].title} span={buttons[6].span} expand={expand === 1 && true} />
          <Button text={buttons[7].title} span={buttons[7].span} expand={expand === 2 && true} />
          <Button text={buttons[8].title} span={buttons[8].span} expand={expand === 3 && true} /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUsPurpose;
