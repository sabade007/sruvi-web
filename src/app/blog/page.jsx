import React from "react";
import Headerbottom from "../components/general/Headerbottom";
import Header from "../components/general/Header";

import Hero from "../components/general/Hero";
import bloghero from "../assets/lottie/bloghero.json";
import BlogImportance from "../components/blog/BlogImportance";
import Blogtitle from "../components/blog/Blogtitle";

const page = () => {
  return (
    <div>
      <Header />

      <Hero
        title={"Blogs"}
        tagline={"Byte-sized Wisdom: Tech Tips & Tricks"}
        subtitle={"Unleashing Tech Creativity : Ctrl+Alt+Inspire."}
        description={
          "In this fast-paced digital era, staying informed is crucial. Our blog brings you the latest tech news, trends, and insights—all in one place. Whether you're a seasoned developer, a curious gadget enthusiast, or a business leader, we've got something for you."
        }
        animationdata={bloghero}
        typestringHead={"Unleashing Tech Creativity : "}
        typestring1={"Ctrl+"}
        typestring2={"Alt+"}
        typestring3={"Inspire."}
        typestringchar1={5}
        typestringchar2={4}
        typestringchar3={8}
      />

      <Headerbottom />
      <BlogImportance />
      <Blogtitle />
    </div>
  );
};

export default page;
