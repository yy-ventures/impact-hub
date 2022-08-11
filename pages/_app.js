import Head from "next/head";
import Layout from "../components/Layout/Layout";
// Home Page Styles
import "../components/Home/HomeGrid/HomeGrid.scss";
import "../components/Home/HomeHero/HomeHero.scss";
import "../components/Home/HomeImpacts/HomeImpacts.scss";
import "../components/Home/HomeNewsLetter/HomeNewsLetter.scss";
import "../components/Home/HomeOffer/HomeOffer.scss";
import "../components/Home/HomeWelcome/HomeWelcome.scss";
// About Page Styles
import "../components/About_Us/AboutUsApproach/AboutUsApproach.scss";
import "../components/About_Us/AboutUsPurpose/AboutUsPurpose.scss";
import "../components/About_Us/AboutUsTeam/AboutUsTeam.scss";
import "../components/About_Us/AboutUsVIsion/AboutUsVision.scss";
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
import "../components/Faq/FaqComponent/FaqComponent.scss";
// Office Space Page Styles
import "../components/OfficeSpace/OfficeSpace.scss";
// Event Spaces Page Styles
import "../components/EventSpaces/EventSpaces.scss";
import "../components/EventSpaces/SpaceCard/SpacesCard.scss";
// modal
import "../components/Shared/MembershipModal/MembershipModal.scss";

// events
import "../components/Events/PastEvents/PastEvents.scss";
import "../components/Shared/EventCommoncard/EventCommonCard.scss";

// enquiry
import "../components/EventSpaces/SendEnquiry/SendEnquiry.scss";

//programs
import "../components/Programs/ProgramsIntro/ProgramsIntro.scss";
import "../components/Programs/ProgramHeadingDescription/ProgramHeadingDescription.scss";
import "../components/ProgramDetails/ProgramDetails.scss";

// story
import "../components/Stories/Stories.scss";
// story details
import "../components/StoryDetails/StoryDetails.scss";
// root layout
import "../components/Layout/layout.scss";
// Global Style
import "../styles/global.scss";
// Shared Component Styles
import "../components/Shared/Button/Button.scss";
import "../components/Shared/ButtonWhite/ButtonWhite.scss";
import "../components/Shared/Cookies/Cookies.scss";
import "../components/Shared/Footer/Footer.scss";
import "../components/Shared/MembershipCard/MembershipCard.scss";
import "../components/Shared/Navbar/Navbar.scss";
import "../components/Shared/TitleBlock/TitleBlock.scss";

// push notification
import "../components/Shared/PushNotify/PushNotify.scss";

// pre loader
import "../components/Shared/PreLoader/PreLoader.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Impact Hub Dhaka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Impact Hub Dhaka brings together entrepreneurs, enablers, young talents and professionals from all across Bangladesh to create a vibrant community."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
