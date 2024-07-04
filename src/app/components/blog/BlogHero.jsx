"use client";
import React from "react";
import Lottie from "lottie-react";
import bloghero from "../../assets/lottie/bloghero.json";
import { Heading, LargeHeading, Para } from "../general/Styles";
import Typewriter from "typewriter-effect";
import { Container } from "@mui/material";
const BlogHero = () => {
  return (
    <div>
      <div className="w-full xs:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
        <div className="flex w-full grid grid-cols-10">
          <div
            className="col-span-5 flex justify-center flex-col p-4 h-full"
            style={{ marginLeft: "10%", marginRight: "5%" }}
          >
            <h1 className="text-primary lg:text-2xl xl:text-3xl xxl:text-4xl font-righteous ">
              Blogs
            </h1>
            <Heading text={"Byte-sized Wisdom: Tech Tips & Tricks"} secondary />
            <h1 className="text-black lg:text-xl xl:text-2xl xxl:text-3xl font-righteous mb-2 mt-4">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Unleashing Tech Creativity :  ")

                    .typeString("<span style='color:#48c43c' >Ctrl+</span>")

                    .pauseFor(2000)
                    .deleteChars(5)
                    .typeString("<span style='color:#FF812B' >Alt+</span>")
                    .pauseFor(2000)
                    .deleteChars(4)
                    .typeString("<span style='color:#48c43c' >Inspire.</span>")

                    .start();
                }}
              />
            </h1>
            <Para
              text={
                "In this fast-paced digital era, staying informed is crucial. Our blog brings you the latest tech news, trends, and insights—all in one place. Whether you're a seasoned developer, a curious gadget enthusiast, or a business leader, we've got something for you."
              }
              black
            />
          </div>
          <div className="col-span-5 flex justify-center items-center h-full">
            <Lottie
              animationData={bloghero}
              loop={true}
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>

      <div className="w-full xs:block sm:block md:block lg:hidden xl:hidden xxl:hidden">
        <div className="flex w-full flex-col ">
          <div className=" flex justify-center items-center h-full">
            <Lottie
              animationData={bloghero}
              loop={true}
              style={{ width: "80%" }}
            />
          </div>

          <div className=" flex justify-center flex-col p-2 h-full ">
            <div className="border-2 border-black p-2 rounded">
              <h1 className="text-primary xs:text-lg tracking-wide sm:text-lg md:text-xl font-righteous ">
                Blogs
              </h1>
              <Heading
                text={"Byte-sized Wisdom: Tech Tips & Tricks"}
                secondary
              />
              <h1 className="text-black xs:text-lg sm:text-lg md:text-xl font-righteous mb-2 mt-4">
                Unleashing Tech Creativity : Ctrl+Alt+Inspire.
              </h1>
              <Para
                text={
                  "In this fast-paced digital era, staying informed is crucial. Our blog brings you the latest tech news, trends, and insights—all in one place. Whether you're a seasoned developer, a curious gadget enthusiast, or a business leader, we've got something for you."
                }
                black
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
