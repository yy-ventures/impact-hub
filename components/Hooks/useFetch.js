import React, { useState, useEffect } from "react";
import useToken from "./useToken";

const useFetch = (endPoint) => {
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
    if (token === "") {
      token = useToken();
    }
  }
  // state to hold the data
  const [data, setData] = useState([]);
  // Fetch the data from the api based on the endpoint
  const fetchData = async () => {
    const baseUrl = process.env.baseUrl;
    console.log(endPoint);
    await fetch(`${baseUrl + endPoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const reverse = data.data
          .slice(0)
          .reverse()
          .map((element) => {
            return element;
          });
        setData(reverse);
      })
      .catch((err) => console.log(err));
  };
  //
  useEffect(() => {
    if (token !== "") {
      fetchData();
    }
  }, [endPoint, token]);

  return data;
};

export default useFetch;
