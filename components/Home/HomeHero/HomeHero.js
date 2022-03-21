import Link from "next/link";
import React from "react";

const HomeHero = () => {
  return (
    <section className="home_hero">
      <video src="/video/hero_video.mp4" type="video/mp4" autoPlay muted loop></video>
    </section>
  );
};

export default HomeHero;
