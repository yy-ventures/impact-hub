import Layout from "../components/Layout/Layout";
import "../styles/global.scss";
import "../components/Shared/Navbar/Navbar.scss";
import "../components/Shared/Footer/Footer.scss";
import "../components/Home/HomeHero/HomeHero.scss";
import "../components/Home/HomeWelcome/HomeWelcome.scss";
import "../components/Home/HomeOffer/HomeOffer.scss";
import "../components/Home/HomeImpacts/HomeImpacts.scss";
import "../components/Home/HomeGrid/HomeGrid.scss";
import "../components/Home/HomeNewsLetter/HomeNewsLetter.scss";
import "../components/Shared/Cookies/Cookies.scss";
import "../components/About_Us/AboutUsVIsion/AboutUsVision.scss";
import "../components/About_Us/AboutUsTeam/AboutUsTeam.scss";
import "../components/Partners/Partners.scss";
import "../components/GlobalNetwork/GlobalNetwork.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
