import React from "react";
import HomeOfferCard from "./HomeOfferCard/HomeOfferCard";
import offerData from "../../../static/Data/offer.json";
import Link from "next/dist/client/link";

const HomeOffer = () => {
  return (
    <section className="home_offer">
      <div className="home_offer_header">
        <h3>What we offer</h3>
      </div>
      <div className="home_offer_body">
        {offerData.map((offer, index) => (
          <Link href={offer.link}>
            <a>
              <HomeOfferCard offer={offer} key={index} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeOffer;
