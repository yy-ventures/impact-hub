import React, { useState, useEffect } from "react";
import rightArrow from "../../../public/right_arrow.svg";
import Link from "next/link";
import useFetch from "../../Hooks/useFetch";
import crossWhite from '../../../public/cross_white.svg'

const HomeGrid = () => {
  const community = useFetch("/get-community");
  const baseUrlForImages = process.env.baseUrlForImages;

  const [popUp, setPopUp] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);

  const HandlePop = (id) => {
    setPopUp(community.filter((popImg) => popImg.id === id));
    setShowPopUp(true);
  };

  // modal close
  const handlePopUpClose = (e) => {
    if (e.target.className === "home_image_grid_body_pop" || "home_image_grid_body_pop_cross") {
      setShowPopUp(false);
    }
  };

  return (
    <section className="home_image_grid">
      <div className="home_image_grid_header">
        <div className="home_image_grid_header_left">
          <h4>The Impact Hub</h4>
          <h2>Community</h2>
        </div>
        <div className="home_image_grid_header_right">
          <Link href="#">
            <a>
              <h4>view stories</h4>
            </a>
          </Link>
          <span>
            <img src={rightArrow.src} />
          </span>
        </div>
      </div>

      {community.length > 0 && (
        <div className="home_image_grid_body">
          {/* col-1 */}
          <div className="home_image_grid_body_col">
            <div className="home_image_grid_body_col_1" onClick={() => HandlePop(community[2].id)}>
              <img src={baseUrlForImages + community[2].image} />
            </div>
            <div className="home_image_grid_body_col_2" onClick={() => HandlePop(community[0].id)}>
              <img src={baseUrlForImages + community[0].image} />
            </div>
          </div>
          {/* col-2 */}
          <div className="home_image_grid_body_col">
            <div className="home_image_grid_body_col_3" onClick={() => HandlePop(community[1].id)}>
              <img src={baseUrlForImages + community[1].image} />
            </div>
            <div className="home_image_grid_body_col_4" onClick={() => HandlePop(community[3].id)}>
              <img src={baseUrlForImages + community[3].image} />
            </div>
            <div className="home_image_grid_body_col_5" onClick={() => HandlePop(community[4].id)}>
              <img src={baseUrlForImages + community[4].image} />
            </div>
          </div>
          {/* col-3 */}
          <div className="home_image_grid_body_col">
            <div className="home_image_grid_body_col_6" onClick={() => HandlePop(community[5].id)}>
              <img src={baseUrlForImages + community[5].image} />
            </div>
            <div className="home_image_grid_body_col_7" onClick={() => HandlePop(community[6].id)}>
              <img src={baseUrlForImages + community[6].image} />
            </div>
          </div>

          {/* pop */}
          {showPopUp && (
            <div className="home_image_grid_body_pop" onClick={handlePopUpClose}>
              <div className="home_image_grid_body_pop_cross" onClick={handlePopUpClose}>
                <img src={crossWhite.src}/>
              </div>
              {popUp.map((popImage) => (
                <img src={baseUrlForImages + popImage.image} key={popImage.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default HomeGrid;
