import React from "react";
import Headerbottom from "../components/general/Headerbottom";
import Header from "../components/general/Header";
import contactushero from "../assets/lottie/contactushero.json";
import Hero from "../components/general/Hero";

const page = () => {
  return (
    <div>
      <Header />
      <Hero
        title={"Contact Us"}
        tagline={"Connecting Code, Empowering You"}
        description={
          "At Sruvi Inc., we're not just about lines of code; we're about building relationships. Whether you have a project idea, a technical challenge, or simply want to chat tech, we're all ears."
        }
        subtitle={"Connecting: Code. Cloud. Client."}
        typestringHead={"Connecting: "}
        typestring1={"Code."}
        typestring2={"Cloud."}
        typestring3={"Client."}
        typestringchar1={5}
        typestringchar2={6}
        typestringchar3={7}
        animationdata={contactushero}
      />
      <Headerbottom />
    </div>
  );
};

export default page;
