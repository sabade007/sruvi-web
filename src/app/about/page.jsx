import React from "react";
import Headerbottom from "../components/general/Headerbottom";
import Hero from "../components/general/Hero";
import serviceshero from "../assets/lottie/serviceshero.json";
import Header from "../components/general/Header";

const page = () => {
  return (
    <div>
      <Header />

      <Hero
        title={"About Us"}
        tagline={"Where Bits Meet Business"}
        subtitle={"CodeCrafters:Innovate. Integrate. Elevate."}
        description={
          "At Sruvi Inc., we don't just write code; we architect solutions that transform businesses. Our passion lies in turning complex challenges into elegant software—ones that empower organizations, delight users, and shape the digital landscape."
        }
        animationdata={serviceshero}
        typestringHead={"CodeCrafters: "}
        typestring1={"Innovate."}
        typestring2={"Integrate."}
        typestring3={"Elevate."}
        typestringchar1={9}
        typestringchar2={10}
        typestringchar3={8}
      />
      <Headerbottom />
    </div>
  );
};

export default page;
