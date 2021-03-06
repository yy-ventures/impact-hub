import Layout from "../components/Layout/Layout";
// Global Style
import "../styles/global.scss";
// Shared Component Styles
import "../components/Shared/Navbar/Navbar.scss";
import "../components/Shared/Footer/Footer.scss";
import "../components/Shared/Cookies/Cookies.scss";
import "../components/Shared/TitleBlock/TitleBlock.scss";
import "../components/Shared/Button/Button.scss";
import "../components/Shared/MembershipCard/MembershipCard.scss";
import "../components/Shared/FaqComponent/FaqComponent.scss";
// Home Page Styles
import "../components/Home/HomeHero/HomeHero.scss";
import "../components/Home/HomeWelcome/HomeWelcome.scss";
import "../components/Home/HomeOffer/HomeOffer.scss";
import "../components/Home/HomeImpacts/HomeImpacts.scss";
import "../components/Home/HomeGrid/HomeGrid.scss";
import "../components/Home/HomeNewsLetter/HomeNewsLetter.scss";
// About Page Styles
import "../components/About_Us/AboutUsVIsion/AboutUsVision.scss";
import "../components/About_Us/AboutUsTeam/AboutUsTeam.scss";
import "../components/About_Us/AboutUsPurpose/AboutUsPurpose.scss";
import "../components/About_Us/AboutUsApproach/AboutUsApproach.scss";
// Partners Page Styles
import "../components/Partners/Partners.scss";
// Global Network Page Styles
import "../components/GlobalNetwork/GlobalNetwork.scss";
// Global Location Page Styles
import "../components/GlobalLocations/GlobalLocations.scss";
// Careers Page Styles
import "../components/Careers/Careers.scss";
// Membership Page Styles
import "../components/Membership/Membership.scss";
// Faq Page Styles
import "../components/Faq/Faq.scss";
// Office Space Page Styles
import "../components/OfficeSpace/OfficeSpace.scss";

// modal
import "../components/Membership/MembershipModal/MembershipModal.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
