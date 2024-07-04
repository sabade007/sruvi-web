"use client";
import React from "react";
import Headerbottom from "../components/general/Headerbottom";

import Header from "../components/general/Header";

import Hero from "../components/general/Hero";
import landinganimation from "../assets/lottie/landingAnimation.json";

const page = () => {
  return (
    <div>
      <Header />
      <Hero
        title={"Sruvi Inc. Welcomes you"}
        tagline={"We're thrilled to have you on board."}
        subtitle={
          "Crafting Cutting-Edge Code, Cultivating Innovation.Success.Dreams. "
        }
        typestringHead={"Crafting Cutting-Edge Code, Cultivating "}
        typestring1={"Innovation."}
        typestring2={"Success."}
        typestring3={"Dreams."}
        animationdata={landinganimation}
        typestringchar1={11}
        typestringchar2={8}
        typestringchar3={7}
        getstarted={true}
        description={
          " We're dreamers, problem-solvers, and creators. Our mission? To craft software that transforms businesses, enhances user experiences, and shapes the future."
        }
      />

      <Headerbottom />
    </div>
  );
};
export default page;
