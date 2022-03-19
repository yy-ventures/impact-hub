import Head from "next/head";
import HomeGrid from "../components/Home/HomeGrid/HomeGrid";
import HomeHero from "../components/Home/HomeHero/HomeHero";
import HomeImpacts from "../components/Home/HomeImpacts/HomeImpacts";
import HomeNewsLetter from "../components/Home/HomeNewsLetter/HomeNewsLetter";
import HomeOffer from "../components/Home/HomeOffer/HomeOffer";
import HomeWelcome from "../components/Home/HomeWelcome/HomeWelcome";
import Cookies from "../components/Shared/Cookies/Cookies";

export default function Home() {
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
