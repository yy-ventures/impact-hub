import React from "react";
import AboutUsApproach from "../../components/About_Us/AboutUsApproach/AboutUsApproach";
import AboutUsPurpose from "../../components/About_Us/AboutUsPurpose/AboutUsPurpose";
import AboutUsTeam from "../../components/About_Us/AboutUsTeam/AboutUsTeam";
import AboutUsVision from "../../components/About_Us/AboutUsVIsion/AboutUsVision";
const AboutUs = () => {
  return (
    <>
      <AboutUsVision />
      <AboutUsTeam />
      <AboutUsPurpose />
      <AboutUsApproach />
    </>
  );
};

export default AboutUs;
