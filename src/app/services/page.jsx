import React from "react";
import Headerbottom from "../components/general/Headerbottom";
import Header from "../components/general/Header";
import Hero from "../components/general/Hero";
import serviceshero from "../assets/lottie/serviceshero.json";

const page = () => {
  return (
    <div>
      <Header />
      <Hero
        title={"Services"}
        tagline={"CodeCrafters: Building Tomorrow's World"}
        description={
          "In a world driven by technology, businesses need more than just solutions—they need partners who understand their unique challenges and aspirations. That's where we come in. Our IT services go beyond mere support; they empower your digital journey."
        }
        subtitle={"TechCrafted Excellence: Secure, Scale, Succeed"}
        animationdata={serviceshero}
        typestringHead={"TechCrafted Excellence: "}
        typestring1={"Secure"}
        typestring2={"Scale"}
        typestring3={"Succeed"}
        typestringchar1={6}
        typestringchar2={5}
        typestringchar3={7}
      />

      <Headerbottom />
    </div>
  );
};

export default page;
