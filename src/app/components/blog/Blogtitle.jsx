"use client";
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
} from "@mui/icons-material";
import React from "react";
import { Heading, Subheading } from "../general/Styles";
import { Card, Container } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Blogtitle = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    };
    fetchData();
  }, []);

  const handleleftClick = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 250;
  };

  const handlerightClick = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  const router = useRouter();

  return (
    <div>
      <div className="mt-10">
        <Container maxWidth="xl">
          <div className="p-4 ml-4">
            <Heading text={"Sruvi Blogs"} black={true} />
            <Subheading
              text={"Let's decode the zeros and ones together! "}
              secondary={true}
            />
          </div>
          <div className="relative flex items-center p-4 bg-white shadow-lg">
            <ArrowCircleLeftRounded
              onClick={handleleftClick}
              fontSize="medium"
              className="cursor-pointer opacity-50 hover:opacity-100"
            />

            <div
              id="slider"
              className="w-full flex h-full overflow-x-scroll   h-full scroll-smooth   p-4 scrollbar-hide"
            >
              {data.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => router.push(`/blogs/${blog.id}`)}
                  style={{ height: "auto" }}
                  className="inline-block p-2 text-center cursor-pointer hover:scale-105 h-full xs:w-4/5 sm:w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 xxl:w-2/5 "
                >
                  <Card variant="outlined" className="p-4 rounded-lg h-full ">
                    <div className="mb-2">
                      <Image
                        width={200}
                        height={200}
                        src={blog.image}
                        alt="blog"
                        style={{
                          height: "5vh",
                          maxWidth: "50%",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <Subheading text={blog.title} black />
                  </Card>
                </div>
              ))}
            </div>

            <ArrowCircleRightRounded
              onClick={handlerightClick}
              fontSize="medium"
              className="cursor-pointer opacity-50 hover:opacity-100"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blogtitle;
