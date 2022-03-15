import React, { useState, useRef, useEffect } from "react";
import BackgroundOverlay from "../../Shared/BackgroundOverlay/BackgroundOverlay";
import Card from "./Card/Card";
import { purpose } from "./description";
import { buttons } from "./buttons";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";

const AboutUsPurpose = () => {
  // on mouse over expand the height of the button div
  const [expand, setExpand] = useState(false);
  const divRef = useRef();

  // On hover toggle the expand variable value
  const onScroll = (e) => {
    window.scrollY > divRef.current.offsetTop ? setExpand(true) : setExpand(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="about_us_purpose" ref={divRef}>
      <BackgroundOverlay className={"about_us_purpose_bg_overlay"} />
      <div className="about_us_purpose_container">
        <div className="about_us_purpose_container_detail">
          <div className="about_us_purpose_container_detail_block">
            <HeadingDescription
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
              <Card key={index} text={title} parentClass={"about_us_purpose_container_btn_grid"} />
            ) : (
              <Card
                key={index}
                text={title}
                parentClass={"about_us_purpose_container_btn_grid"}
                span={span}
                expand={expand}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUsPurpose;
