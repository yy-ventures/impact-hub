import Link from "next/link";
import React from "react";

const HomeHero = () => {
  return (
    <section className="home_hero">
      <video src="/video/hero_video.mp4" type="video/mp4" autoPlay muted loop></video>
      <div className="home_hero_book">
        <Link href='/co-working/membership'>
          <a><button>Book <br/> Now!</button></a>
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
