import { Card, Container } from "@mui/material";
import React from "react";
import { Heading, Para, Subheading } from "../general/Styles";
import Image from "next/image";
import blog from "../../assets/freepik/blog.png";
import {
  Looks3,
  Looks4,
  Looks5,
  Looks6,
  LooksOne,
  LooksTwo,
} from "@mui/icons-material";
import Blogbulletpoints from "./Blogbulletpoints";

const BlogImportance = () => {
  return (
    <div className="mt-10">
      <div className="w-full xs:hidden sm:hidden md:hidden lg:block xl:block xxl:block">
        <Container maxWidth="xl">
          <div className="w-full bg-white shadow-lg p-4">
            <div className="p-4">
              <Heading text={"Why are Blogs Important ? "} primary={true} />
            </div>
            <div className="flex grid grid-cols-4">
              <div className="col-span-1 h-full flex flex-col items-center justify-center">
                <Image src={blog} alt="blog" style={{ width: "100%" }} />
              </div>
              <div className="col-span-3 h-full">
                <div className="flex grid grid-cols-2 gap-4">
                  <Card variant="outlined" className="p-4 rounded-lg">
                    <div className="flex flex-row mb-2">
                      <LooksOne className="mr-2" />
                      <Subheading text={"Knowledge Sharing"} black />
                    </div>
                    <Para
                      text={
                        "Blogs provide valuable information, insights, and advice on various topics."
                      }
                      black
                    />
                  </Card>
                  <Card variant="outlined" className="p-4 rounded-lg">
                    <div className="flex flex-row mb-2">
                      <LooksTwo className="mr-2" />
                      <Subheading text={"Online Presence"} black />
                    </div>
                    <Para
                      text={
                        "Businesses use blogs to enhance their online presence, engage with their audience, and establish authority in their industry."
                      }
                      black
                    />
                  </Card>
                  <Card variant="outlined" className="p-4 rounded-lg">
                    <div className="flex flex-row mb-2">
                      <Looks3 className="mr-2" />
                      <Subheading text={"SEO Benefits"} black />
                    </div>
                    <Para
                      text={
                        "Regularly updated blogs can improve search engine rankings and drive organic traffic to a website."
                      }
                      black
                    />
                  </Card>
                  <Card variant="outlined" className="p-4 rounded-lg">
                    <div className="flex flex-row mb-2">
                      <Looks4 className="mr-2" />
                      <Subheading text={"Community Building"} black />
                    </div>
                    <Para
                      text={
                        "Blogs foster a community of like-minded readers who can comment, share, and interact with the content."
                      }
                      black
                    />
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-10 ">
              <div className="p-4">
                <Heading
                  text={"Never forget to add Blogs to your Website"}
                  secondary={true}
                />
                <div className="mb-2">
                  <Subheading
                    text={"What's the story behind that?"}
                    black={true}
                  />
                </div>
                <Para
                  black
                  text={
                    "Blogging isn't just about writing—it's about building relationships, sharing knowledge, and creating a digital presence that resonates with your audience.Blogging is pivotal for business growth, driving traffic, building authority, and generating leads. It's a powerful tool that enhances your online presence and establishes your brand as a trusted resource. "
                  }
                />
                <div className="mt-10">
                  <Subheading
                    text={"Spilling beans on Blogging Benifits."}
                    black={true}
                  />
                  <div className="flex grid grid-rows gap-4 mt-4">
                    <Blogbulletpoints
                      title={"Drive Traffic to Your Website"}
                      d1={
                        "Blogging creates fresh content, leading to more indexed pages on your website."
                      }
                      d2={
                        "Each blog post is an opportunity to show up in search engine results, attracting organic traffic"
                      }
                      d3={
                        "Regular updates signal to search engines that your website is active and relevant."
                      }
                      icon={<LooksOne className="mr-2 text-secondary" />}
                    />
                    <Blogbulletpoints
                      title={"Enhance SEO (Search Engine Optimization)"}
                      d1={
                        "Blogs improve your website's visibility on search engines."
                      }
                      d2={
                        "Relevant keywords in blog posts help you rank higher in search results."
                      }
                      d3={
                        "Quality content attracts inbound links, boosting your overall SEO."
                      }
                      icon={<LooksTwo className="mr-2 text-secondary" />}
                    />
                    <Blogbulletpoints
                      title={"Develop Better Customer Relationships"}
                      d1={
                        "Blogs allow you to connect with your audience on a personal level."
                      }
                      d2={
                        "Address their pain points, answer questions, and provide solutions."
                      }
                      d3={
                        "Engage through comments and social media interactions."
                      }
                      icon={<Looks3 className="mr-2 text-secondary" />}
                    />

                    <Blogbulletpoints
                      title={"Content for Social Media:"}
                      d1={"Repurpose blog content for social media channels."}
                      d2={
                        "Share snippets, infographics, or quotes from your posts."
                      }
                      d3={
                        "Broaden your online footprint and reach diverse audiences."
                      }
                      icon={<Looks4 className="mr-2 text-secondary" />}
                    />
                    <Blogbulletpoints
                      title={"Generate Leads and Conversions"}
                      d1={
                        "High-quality blog content attracts potential customers."
                      }
                      d2={"Include calls-to-action (CTAs) within your posts."}
                      d3={
                        "Convert readers into subscribers, leads, or paying customers."
                      }
                      icon={<Looks5 className="mr-2 text-secondary" />}
                    />
                    <Blogbulletpoints
                      title={"Long-Term Results"}
                      d1={"Blog posts have a lasting impact."}
                      d2={
                        "Even older posts continue to drive traffic and provide value."
                      }
                      d3={
                        "Over time, your blog becomes a valuable asset for your business."
                      }
                      icon={<Looks6 className="mr-2 text-secondary" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="w-full xs:block sm:block md:block lg:hidden xl:hidden xxl:hidden">
        <Container maxWidth="xl">
          <div className="w-full bg-white shadow-lg p-4">
            <div className="p-4">
              <Heading text={"Why are Blogs Important ? "} primary={true} />
            </div>
            <div className="flex  flex-col ">
              <div className=" flex flex-col items-center justify-center">
                <Image src={blog} alt="blog" style={{ width: "80%" }} />
              </div>
              <div className="mt-4">
                <div className="flex grid grid-cols-2 gap-4">
                  <Card variant="outlined" className="p-4 rounded-lg h-full">
                    <div className="flex flex-row mb-2">
                      <LooksOne className="mr-2" />
                      <Subheading text={"Knowledge Sharing"} black />
                    </div>
                    <Para
                      text={
                        "Blogs provide valuable information, insights, and advice on various topics."
                      }
                      black
                    />
                  </Card>
                  <Card variant="outlined" className="p-4 rounded-lg h-full">
                    <div className="flex flex-row mb-2">
                      <LooksTwo className="mr-2" />
                      <Subheading text={"Online Presence"} black />
                    </div>
                    <Para
                      text={
                        "Businesses use blogs to enhance their online presence, engage with their audience, and establish authority in their industry."
                      }
                      black
                    />
                  </Card>
                  <Card variant="outlined" className="p-4 rounded-lg h-full">
                    <div className="flex flex-row mb-2">
                      <Looks3 className="mr-2" />
                      <Subheading text={"SEO Benefits"} black />
                    </div>
                    <Para
                      text={
                        "Regularly updated blogs can improve search engine rankings and drive organic traffic to a website."
                      }
                      black
                    />
                  </Card>
                  <Card variant="outlined" className="p-4 rounded-lg h-full">
                    <div className="flex flex-row mb-2">
                      <Looks4 className="mr-2" />
                      <Subheading text={"Community Building"} black />
                    </div>
                    <Para
                      text={
                        "Blogs foster a community of like-minded readers who can comment, share, and interact with the content."
                      }
                      black
                    />
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-10 ">
              <div className="p-4">
                <Heading
                  text={"Never forget to add Blogs to your Website"}
                  secondary={true}
                />
                <div className="mb-2">
                  <Subheading
                    text={"What's the story behind that?"}
                    black={true}
                  />
                </div>
                <Para
                  black
                  text={
                    "Blogging isn't just about writing—it's about building relationships, sharing knowledge, and creating a digital presence that resonates with your audience.Blogging is pivotal for business growth, driving traffic, building authority, and generating leads. It's a powerful tool that enhances your online presence and establishes your brand as a trusted resource. "
                  }
                />
                <div className="mt-10">
                  <Subheading
                    text={"Spilling beans on Blogging Benifits."}
                    black={true}
                  />
                  <div className="flex grid grid-rows gap-4 mt-4">
                    <Blogbulletpoints
                      title={"Drive Traffic to Your Website"}
                      d1={
                        "Blogging creates fresh content, leading to more indexed pages on your website."
                      }
                      d2={
                        "Each blog post is an opportunity to show up in search engine results, attracting organic traffic"
                      }
                      d3={
                        "Regular updates signal to search engines that your website is active and relevant."
                      }
                      icon={<LooksOne className="mr-2 text-secondary" />}
                    />
                    <Blogbulletpoints
                      title={"Enhance SEO (Search Engine Optimization)"}
                      d1={
                        "Blogs improve your website's visibility on search engines."
                      }
                      d2={
                        "Relevant keywords in blog posts help you rank higher in search results."
                      }
                      d3={
                        "Quality content attracts inbound links, boosting your overall SEO."
                      }
                      icon={<LooksTwo className="mr-2 text-secondary" />}
                    />
                    <Blogbulletpoints
                      title={"Develop Better Customer Relationships"}
                      d1={
                        "Blogs allow you to connect with your audience on a personal level."
                      }
                      d2={
                        "Address their pain points, answer questions, and provide solutions."
                      }
                      d3={
                        "Engage through comments and social media interactions."
                      }
                      icon={<Looks3 className="mr-2 text-secondary" />}
                    />

                    <Blogbulletpoints
                      title={"Content for Social Media:"}
                      d1={"Repurpose blog content for social media channels."}
                      d2={
                        "Share snippets, infographics, or quotes from your posts."
                      }
                      d3={
                        "Broaden your online footprint and reach diverse audiences."
                      }
                      icon={<Looks4 className="mr-2 text-secondary" />}
                    />
                    <Blogbulletpoints
                      title={"Generate Leads and Conversions"}
                      d1={
                        "High-quality blog content attracts potential customers."
                      }
                      d2={"Include calls-to-action (CTAs) within your posts."}
                      d3={
                        "Convert readers into subscribers, leads, or paying customers."
                      }
                      icon={<Looks5 className="mr-2 text-secondary" />}
                    />
                    <Blogbulletpoints
                      title={"Long-Term Results"}
                      d1={"Blog posts have a lasting impact."}
                      d2={
                        "Even older posts continue to drive traffic and provide value."
                      }
                      d3={
                        "Over time, your blog becomes a valuable asset for your business."
                      }
                      icon={<Looks6 className="mr-2 text-secondary" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogImportance;
