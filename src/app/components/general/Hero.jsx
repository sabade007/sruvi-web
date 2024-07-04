"use client";
import React from "react";
import Lottie from "lottie-react";
import bloghero from "../../assets/lottie/bloghero.json";
import { But, Heading, LargeHeading, Para } from "../general/Styles";
import Typewriter from "typewriter-effect";
import { Container } from "@mui/material";

const Hero = ({
  title,
  tagline,
  subtitle,
  description,
  animationdata,
  typestringHead,
  typestring1,
  typestring2,
  typestring3,
  typestringchar1,
  typestringchar2,
  typestringchar3,
  getstarted,
}) => {
  return (
    <div>
      <div className="w-full xs:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
        <div
          className="flex w-full grid grid-cols-10"
          style={{ height: "50vh" }}
        >
          <div
            className="col-span-5 flex justify-center flex-col p-4 h-full"
            style={{ marginLeft: "10%", marginRight: "5%" }}
          >
            <h1 className="text-primary lg:text-2xl xl:text-3xl xxl:text-4xl font-righteous ">
              {title}
            </h1>
            <Heading text={tagline} secondary />
            <h1 className="text-black lg:text-xl xl:text-2xl xxl:text-3xl font-righteous mb-2 mt-4">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`${typestringHead}`)

                    .typeString(
                      `<span style='color:#48c43c' >${typestring1}</span>`
                    )

                    .pauseFor(2000)
                    .deleteChars(typestringchar1)
                    .typeString(
                      `<span style='color:#FF812B' >${typestring2}</span>`
                    )
                    .pauseFor(2000)
                    .deleteChars(typestringchar2)
                    .typeString(
                      `<span style='color:#48c43c' >${typestring3}</span>`
                    )
                    .pauseFor(2000)
                    .deleteChars(typestringchar3)
                    .typeString(
                      `<span style='color:#FF812B' >${
                        typestring1 + " " + typestring2 + " " + typestring3
                      }</span>`
                    )
                    .start();
                }}
              />
            </h1>
            <Para text={description} black />
            <div className="mt-4 flex ">
              {getstarted && <But text={"Get Started"} bgblack />}
            </div>
          </div>
          <div className="col-span-5 flex justify-center items-center h-full">
            <Lottie
              animationData={animationdata}
              loop={true}
              style={{ width: "80%", objectFit: "contain", height: "45vh" }}
            />
          </div>
        </div>
      </div>

      <div className="w-full xs:block sm:block md:block lg:hidden xl:hidden xxl:hidden">
        <div className="flex w-full flex-col ">
          <div className=" flex justify-center items-center h-full">
            <Lottie
              animationData={animationdata}
              loop={true}
              style={{ width: "80%", objectFit: "contain" }}
            />
          </div>

          <div className=" flex justify-center flex-col p-2 h-full bg-white ">
            <div className=" bg-white shadow-lg p-4 rounded-lg">
              <h1 className="text-primary  tracking-wide xs:text-xl sm:text-xl md:text-xl text-center font-righteous ">
                {title}
              </h1>
              <div className="flex justify-center">
                <Heading text={tagline} secondary />
              </div>

              <h1 className="text-black xs:text-xl sm:text-xl md:text-xl font-righteous text-center mb-2 mt-4">
                {subtitle}
              </h1>
              <Para text={description} black />
              <div className="mt-4 flex justify-center">
                {getstarted && <But text={"Get Started"} bgblack />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
