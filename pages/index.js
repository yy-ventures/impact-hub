import React, { useState, useEffect } from "react";
import Head from "next/head";
import HomeGrid from "../components/Home/HomeGrid/HomeGrid";
import HomeHero from "../components/Home/HomeHero/HomeHero";
import HomeImpacts from "../components/Home/HomeImpacts/HomeImpacts";
import HomeNewsLetter from "../components/Home/HomeNewsLetter/HomeNewsLetter";
import HomeOffer from "../components/Home/HomeOffer/HomeOffer";
import HomeWelcome from "../components/Home/HomeWelcome/HomeWelcome";
import Cookies from "../components/Shared/Cookies/Cookies";

export default function Home() {
  // const token = useToken();
  const [token, setToken] = useState(null);

  // Get token value from the api
  const HandleToken = async () => {
    const baseUrl = process.env.baseUrl;
    await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "admin@example.com", password: "yy@123456" }),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.data.token));
  };

  useEffect(() => {
    HandleToken();
  }, []);

  // Set local storage on the browser not on the server-side
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }

  // console.log(localStorage.getItem("token"));
  return (
    <div>
      <Head>
        <title>Impact Hub Dhaka</title>
        <meta
          name="description"
          content="Impact Hub Dhaka brings together entrepreneurs, enablers, young talents and professionals from all across Bangladesh to create a vibrant community."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HomeHero />
      <HomeWelcome />
      <HomeOffer />
      <HomeImpacts />
      <HomeGrid />
      <HomeNewsLetter />
      {/* <Cookies/> */}
    </div>
  );
}
