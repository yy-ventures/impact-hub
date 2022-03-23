import React, { useState, useEffect } from "react";
import rightArrow from "../../../public/right_arrow.svg";
import Link from "next/link";
import useToken from "../../Hooks/useToken";
import useFetch from "../../Hooks/useFetch";
const HomeGrid = () => {
  const community = useFetch("/get-community");
  console.log(community);
  // console.log(token);
  // // State variable for Community images
  // const [community, setCommunity] = useState([]);
  // // Fetch function to get data from the api
  // const fetchCommunity = async () => {
  //   const baseUrl = process.env.baseUrl;
  //   await fetch(`${baseUrl}/get-community`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //       Authorization: "Bearer " + window.localStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       //   setCommunity(data.data)
  //     });
  // };

  // // Fetch data
  // useEffect(() => {
  //   if (token !== null) {
  //     fetchCommunity();
  //   }
  // }, [token]);

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
      <div className="home_image_grid_body">
        <div className="home_image_grid_body_grid">
          <div className="home_image_grid_body_grid_images">
            <img src="/images/grid/1.jpg" />
            <img src="/images/grid/2.jpg" />
          </div>
          <div className="home_image_grid_body_grid_images">
            <img src="/images/grid/3.jpg" />
            <img src="/images/grid/4.jpg" />
            <img src="/images/grid/5.jpg" />
          </div>
          <div className="home_image_grid_body_grid_images">
            <img src="/images/grid/6.jpg" />
            <img src="/images/grid/7.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGrid;
