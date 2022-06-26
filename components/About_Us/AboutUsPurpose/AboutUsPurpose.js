import React, { useState, useRef, useEffect } from "react";
import BackgroundOverlay from "../../Shared/BackgroundOverlay/BackgroundOverlay";
import Card from "./Card/Card";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";
import { purpose, buttons } from "./contents";

const AboutUsPurpose = () => {
  // on mouse over expand the height of the button div
  const [expand, setExpand] = useState(false);
  const divRef = useRef();

  // On hover toggle the expand variable value
  const onScroll = () => {
    window.scrollY > divRef.current.offsetTop ? setExpand(true) : setExpand(false);
  };
  const onMobileScreen = () => {
    window.innerWidth < 600 && setExpand(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", onMobileScreen);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onMobileScreen);
    };
  }, []);

  return (
    <section className="about_us_purpose" ref={divRef}>
      <BackgroundOverlay className={"about_us_purpose_bg_overlay"} />
      <div className="about_us_purpose_container">
        <div className="about_us_purpose_container_detail">
          <div className="about_us_purpose_container_detail_block">
            <HeadingDescription parentClass={"about_us_purpose_container_detail_block"} heading={purpose.heading} />
          </div>

          <p className="about_us_purpose_container_detail_highlight highlight-global">{purpose.highlight}</p>

          <p className="about_us_purpose_container_detail_block_body body-global">
            We mobilize vibrant community of entrepreneurs through
            <strong> inspiring space, meaningful content </strong> and
            <strong> diverse networks</strong> to accelerate sustainable socio-economic growth of Bangladesh.
          </p>
        </div>
        <div className="about_us_purpose_container_btn_grid">
          {buttons.map(({ id, title, span }, index) => {
            return index < 3 ? (
              <div className={`about_us_purpose_container_btn_grid_child`}>
                <Card key={id} text={title} parentClass={"about_us_purpose_container_btn_grid_child"} heading={true} />
                <Card
                  key={buttons[index + 3].id}
                  text={buttons[index + 3].title}
                  parentClass={"about_us_purpose_container_btn_grid_child"}
                  span={buttons[index + 3].span}
                  expand={expand}
                />
                <Card
                  key={buttons[index + 6].id}
                  text={buttons[index + 6].title}
                  parentClass={"about_us_purpose_container_btn_grid_child"}
                  span={buttons[index + 6].span}
                  expand={expand}
                />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUsPurpose;
