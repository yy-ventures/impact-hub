import React, { useState, useEffect } from "react";
import rightArrow from "../../../public/right_arrow.svg";
import Link from "next/link";
import useToken from "../../Hooks/useToken";
import useFetch from "../../Hooks/useFetch";
const HomeGrid = () => {
  const community = useFetch("/get-community");
  const baseUrlForImages = process.env.baseUrlForImages;
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
          <div className="home_image_grid_body_grid">
            <div className="home_image_grid_body_grid_images">
              <img src={baseUrlForImages + community[2].image} />
              <img src={baseUrlForImages + community[0].image} />
            </div>
            <div className="home_image_grid_body_grid_images">
              <img src={baseUrlForImages + community[1].image} />
              <img src={baseUrlForImages + community[3].image} />
              <img src={baseUrlForImages + community[4].image} />
            </div>
            <div className="home_image_grid_body_grid_images">
              <img src={baseUrlForImages + community[5].image} />
              <img src={baseUrlForImages + community[6].image} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeGrid;
