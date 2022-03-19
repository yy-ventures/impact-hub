import Layout from "../components/Layout/Layout";
// Globa styles
import "../styles/global.scss";
// Component Styles
import "../components/Shared/Navbar/Navbar.scss";
import "../components/Shared/Footer/Footer.scss";
import "../components/Shared/Cookies/Cookies.scss";
import "../components/Shared/TitleBlock/TitleBlock.scss";
import "../components/Shared/MembershipCard/MembershipCard.scss";
import "../components/Shared/Button/Button.scss";
// Home Page Styles
import "../components/Home/HomeHero/HomeHero.scss";
import "../components/Home/HomeWelcome/HomeWelcome.scss";
import "../components/Home/HomeOffer/HomeOffer.scss";
import "../components/Home/HomeImpacts/HomeImpacts.scss";
import "../components/Home/HomeGrid/HomeGrid.scss";
import "../components/Home/HomeNewsLetter/HomeNewsLetter.scss";
import "../components/About_Us/AboutUsVIsion/AboutUsVision.scss";
import "../components/About_Us/AboutUsTeam/AboutUsTeam.scss";
import "../components/About_Us/AboutUsPurpose/AboutUsPurpose.scss";
import "../components/About_Us/AboutUsApproach/AboutUsApproach.scss";
import "../components/Partners/Partners.scss";
import "../components/GlobalNetwork/GlobalNetwork.scss";
import "../components/GlobalLocations/GlobalLocations.scss";
import "../components/Careers/Careers.scss";
import "../components/Membership/Membership.scss";
import "../components/Faq/Faq.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
